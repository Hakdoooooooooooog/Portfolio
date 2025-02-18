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
      className="grid justify-items-center content-between items-center p-2 rounded-md !mix-blend-hard-light hover:!shadow-lg"
      sx={{
        gridTemplateRows: "auto 1fr",
        backgroundColor: theme === "dark" ? "#2c3a33a8" : "#f0f0f0",
      }}
    >
      <StyledImageComponent
        src={imgSrc}
        alt={title}
        className="!rounded-md p-2 row-span-1 max-w-[5rem]"
      />
      <Typography
        variant="subtitle1"
        className="row-span-1"
        sx={{
          textAlign: "center",
          width: "12ch",
          wordWrap: "break-word",
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
