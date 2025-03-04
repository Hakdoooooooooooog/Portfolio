import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
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

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref} className={cn("w-full", classname)}>
      <motion.div variants={variants} initial="hidden" animate={mainControl}>
        {children}
      </motion.div>
    </div>
  );
};

export default RevealItem;
