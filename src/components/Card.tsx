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
      className="grid justify-items-center items-center text-center p-1 rounded-md !mix-blend-hard-light"
      sx={{
        backgroundColor: theme === "dark" ? "#2c3a33a8" : "#f0f0f0",
      }}
    >
      <StyledImageComponent
        src={imgSrc}
        alt={title}
        className="!rounded-md p-2"
      />
      <Typography
        variant="subtitle1"
        sx={{
          width: "15ch",
          wordWrap: "break-word",
          marginTop: 1,
          color: theme === "dark" ? "#fff" : "text.primary",
        }}
      >
        {title}
      </Typography>
      {children}
    </Card>
  );
};

export default CustomCard;
