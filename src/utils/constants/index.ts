import { styled, AppBar, Toolbar, Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "hsl(260,14%,8%)" : "#f9fafa",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 1px 3px rgba(0, 0, 0, 0.2)"
      : theme.shadows[4],
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.87)",
  mixBlendMode: theme.palette.mode === "dark" ? "screen" : "overlay",
  transition: theme.transitions.create(["background-color", "box-shadow"]),
}));

export const StyledImageComponent = styled("img")(({ theme }) => {
  const baseImageStyle = {
    width: 100,
    height: 100,
    borderRadius: "20%",
    aspectRatio: "1/1",
    background: theme.palette.mode === "dark" ? "hsl(150,14%,20%)" : "#f9fafa",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 1px 3px rgba(0, 0, 0, 0.2)"
        : theme.shadows[4],
    transition: theme.transitions.create(["background-color", "box-shadow"]),
  };

  return {
    ...baseImageStyle,
    flex: "0 0 auto",
    textAlign: "center",
  };
});

export const StyledBoxComponent = styled(Box)(() => {
  const baseBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: "100%",
    minHeight: "80dvh",
  };
  return {
    ...baseBoxStyle,
  };
});

export const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: theme.palette.mode === "dark" ? "hsl(260,14%,8%)" : "#f9fafa",
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.87)",
  boxShadow: theme.shadows[4],
  transition: theme.transitions.create(["background-color", "box-shadow"]),
}));

export const StyledContainer = styled(Box)(({ theme }) => {
  const baseBoxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  return {
    ...baseBoxStyle,
    flexDirection: "column",
    gap: theme.spacing(15),
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(0deg, rgba(34,23,122,1) 0%, rgba(96,94,161,1) 60%, rgba(142,163,166,1) 90%, rgba(153,153,153,1) 100%)"
        : "linear-gradient(0deg, rgba(51, 40, 139, 0.7) 0%, rgba(113, 111, 178, 0.7) 60%, rgba(159, 180, 183, 0.7) 90%, rgba(170, 170, 170, 0.7) 100%)",
    color:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.87)",
    transition: theme.transitions.create(["background-color", "color"]),
  };
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.87)",
}));

export const skills: {
  frontend: Array<string>;
  backend: Array<string>;
  others: Array<string>;
} = {
  frontend: ["HTML5", "Tailwind CSS", "React JS", "Typescript", "Material UI"],
  backend: ["NodeJS + Express JS", "PostgreSQL", "MySQL"],
  others: ["Git", "Netlify", "AWS S3", "Cisco Packet Tracer"],
};

export const certifications: Array<{
  name: string;
  certifications: Array<string>;
}> = [
  {
    name: "DICT",
    certifications: [
      "Web Development Principles and Introduction to HTML",
      "Basic Level of Cloud Computing",
      "Intermediate Level of Cloud Computing",
    ],
  },
  {
    name: "Flexisource IT",
    certifications: [
      "Mastering React from Essentials to Advanced Optimization",
    ],
  },
  {
    name: "One Month",
    certifications: [
      "Javascript (2A4547EA)",
      "HTML and CSS Fundamentals (DA8E536A)",
    ],
  },
];

export const projects: Array<{
  title: string;
  description: string;
  imgSrc: string;
  github: string;
  demo?: string;
  technologies?: Array<string>;
}> = [
  {
    title: "TOPCIT LCMS",
    description:
      "A web-based learners content management system forpractical competency in ICT.",
    imgSrc: "images/projects/topcit-thumbnail.png",
    github: "https://github.com/Hakdoooooooooooog/lcms-topcit-app",
    technologies: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "NodeJS + Express JS",
      "PostgreSQL",
      "AWS S3",
    ],
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills and projects.",
    imgSrc: "images/projects/portfolio-thumbnail.png",
    github: "https://github.com/Hakdoooooooooooog/Portfolio",
    technologies: ["React JS", "Typescript", "Tailwind CSS", "Material UI"],
  },
];
