import { Card, Typography } from "@mui/material";
import { StyledImageComponent } from "../utils/constants";

type CardProps = {
  title: string;
  imgSrc: string;
  theme?: "dark" | "light";
};

const CustomCard = ({
  title,
  imgSrc,
  theme,
  children,
}: CardProps & { children?: React.ReactNode }) => {
  return (
    <Card
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        justifyItems: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 1,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <StyledImageComponent
        src={imgSrc}
        alt={title}
        sx={{
          padding: 1,
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{
          width: "15ch",
          wordWrap: "break-word",
          marginTop: 1,
          color: theme === "dark" ? "text.primary" : "text.secondary",
        }}
      >
        {title}
      </Typography>
      {children}
    </Card>
  );
};

export default CustomCard;
