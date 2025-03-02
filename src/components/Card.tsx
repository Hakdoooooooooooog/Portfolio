import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      style={{
        gridTemplateRows: "auto 1fr",
        backgroundColor: theme === "dark" ? "#2c3a33a8" : "#f0f0f0",
      }}
    >
      <div className="row-span-1 h-25 w-25 max-w-[25vw] sm:max-w-[10vw] md:max-w-[8vw] xl:max-w-[5vw]">
        <AspectRatio ratio={1 / 1} className=" p-2">
          <img src={imgSrc} alt={title} className="rounded-md aspect-square" />
        </AspectRatio>
      </div>
      <p
        className="row-span-1 text-lg font-semibold"
        style={{
          textAlign: "center",
          width: "12ch",
          wordWrap: "break-word",
          color: theme === "dark" ? "#f0f0f0" : "#2c3a33",
        }}
      >
        {title}
      </p>
      {children}
    </Card>
  );
};

export default CustomCard;
