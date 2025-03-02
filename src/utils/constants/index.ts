import { styled, AppBar, Toolbar } from "@mui/material";

export const baseBoxStyles =
  "flex justify-center items-center w-full min-h-[80dvh] gap-6 pt-10";

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

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.87)",
}));

export const credentialLinks: Array<{
  name: string;
  link: string;
}> = [
  {
    name: "linkedin",
    link: "https://github.com/Hakdoooooooooooog",
  },
  {
    name: "github",
    link: "https://www.linkedin.com/in/darenz-hicap-58307b339/",
  },
  {
    name: "email",
    link: "mailto:hicap.darenzjasper@gmail.com",
  },
];

export const skills: Array<{
  name: string;
  skills: Array<string>;
}> = [
  {
    name: "Frontend",
    skills: ["HTML5", "Tailwind CSS", "React JS", "Typescript", "Material UI"],
  },
  {
    name: "Backend",
    skills: ["NodeJS + Express JS", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    name: "Others",
    skills: [
      "Git",
      "Netlify",
      "AWS S3",
      "Cisco Packet Tracer",
      "Java",
      "React Query",
      "Zustand",
      "Zod",
    ],
  },
];

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
  imgSrc?: string;
  github: string;
  demo?: string;
  technologies?: Array<string>;
}> = [
  {
    title: "TOPCIT LCMS",
    description:
      "A web-based learners content management system for practical competency in ICT.",
    imgSrc: "images/projects/topcit-thumbnail.png",
    github: "https://github.com/Hakdoooooooooooog/lcms-topcit-app",
    technologies: [
      "React JS",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Zustand",
      "Zod",
      "React Query",
    ],
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills and projects.",
    imgSrc: "images/projects/portfolio-thumbnail.png",
    github: "https://github.com/Hakdoooooooooooog/Portfolio",
    demo: "https://darenzhicap.netlify.app/",
    technologies: ["React JS", "Typescript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Topcit LCMS API",
    description:
      "A RESTful API for the TOPCIT LCMS application using NodeJS and Express JS.",
    github: "https://github.com/Hakdoooooooooooog/topcit-lcms-app-server",
    technologies: [
      "NodeJS + Express JS",
      "PostgreSQL",
      "AWS S3",
      "Prisma",
      "Netlify",
    ],
  },
  {
    title: "Event Management System API",
    description:
      "A RESTful API for an event management system using NodeJS and Express JS.",
    github:
      "https://github.com/Hakdoooooooooooog/Event-management-system-server",
    technologies: ["NodeJS + Express JS", "MySQL", "Prisma"],
  },
  {
    title: "Ordering System",
    description:
      "A simple cmd-based ordering system for a computer store using Java.",
    github: "https://github.com/Hakdoooooooooooog/Ordering-System",
    technologies: ["Java"],
  },
  {
    title: "Rock Paper Scissors and Text-based RPG Game",
    description:
      "A simple cmd-based rock paper scissors and text-based RPG game using Java.",
    github: "https://github.com/Hakdoooooooooooog/Game-Project-Java",
    technologies: ["Java"],
  },
];
