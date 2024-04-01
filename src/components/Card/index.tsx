import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";

const CardArticle = styled("article")(() => ({
  padding: "2.4rem",
  background: "#FFF0DD",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  ["& *"]: {
    cursor: "pointer !important",
  },
}));

const Title = styled(Typography)(() => ({
  fontSize: "2rem",
  lineHeight: "2.8rem",
  marginBottom: "1.2rem",
  fontWeight: 600,
}));

const Summary = styled(Typography)(() => ({
  fontSize: "1.6rem",
  lineHeight: "2.4rem",
  marginBottom: "1.2rem",
  color: " #5B5B5B",
  fontFamily: "Roboto",
}));

const LabelContainer = styled("div")(() => ({
  display: "flex",
  gap: "2rem",
  marginTop: "1.6rem",
}));

const Label = styled(Typography)(() => ({
  fontSize: "1.6rem",
  background: "#FFDEB5",
  borderRadius: "0.4rem",
  color: "#84623A",
  height: "3.2rem",
  padding: "0 1.6rem",
  lineHeight: "3.2rem",
  fontWeight: "500",
  textAlign: "center",
}));

const Card = ({ content, key }) => {
  const router = useRouter();

  const handleClick = () => {
    if (content.url) {
      window.open(content.url);
    } else {
      router.push(`${location.pathname}/${content.id}`);
    }
  };

  return (
    <CardArticle key={key} onClick={handleClick}>
      <Box>
        <Title> {content.name} </Title>
        <Summary> {content.summary} </Summary>
      </Box>
      <LabelContainer>
        {content.labels?.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </LabelContainer>
    </CardArticle>
  );
};

export default Card;