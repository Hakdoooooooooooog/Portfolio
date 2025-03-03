import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import RevealItem from "./RevealItem";

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
    <RevealItem classname="max-w-[35vw] sm:max-w-[25vw] md:max-w-[20vw] lg:max-w-[15vw] xl:max-w-[10vw]">
      <Card
        className="h-[12rem] max-h-fit grid justify-items-center content-between items-center rounded-md !mix-blend-hard-light hover:!shadow-lg"
        style={{
          gridTemplateRows: "auto 1fr",
          backgroundColor: theme === "dark" ? "#2c3a33a8" : "#f0f0f0",
        }}
      >
        <div className="row-span-1 h-20 w-20 max-w-[25vw] sm:max-w-[10vw] md:max-w-[8vw] xl:max-w-[5vw]">
          <AspectRatio
            ratio={1 / 1}
            className="p-2"
            style={{
              backgroundColor: theme === "dark" ? "#2c3a33" : "#fff",
              borderRadius: "1rem",
            }}
          >
            <img
              src={imgSrc}
              alt={title}
              className="rounded-md aspect-square"
            />
          </AspectRatio>
        </div>
        <p
          className="row-span-1 text-md font-semibold leading-5 text-center p-2"
          style={{
            maxWidth: "fit-content",
            wordWrap: "break-word",
            color: theme === "dark" ? "#f0f0f0" : "#2c3a33",
          }}
        >
          {title}
        </p>
        {children}
      </Card>
    </RevealItem>
  );
};

export default CustomCard;
