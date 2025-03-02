import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type RevealItemProps = {
  children: React.ReactNode;
  classname?: string;
};

const RevealItem = ({ children, classname }: RevealItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInview = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControl.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} className={cn("w-full", classname)}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            translateX: -100,
          },
          visible: {
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.5,

              ease: "easeInOut",
            },
          },
        }}
        initial="hidden"
        animate={mainControl}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealItem;
