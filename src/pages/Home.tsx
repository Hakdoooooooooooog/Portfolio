import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useThemeStore } from "../utils/stores";
import {
  baseBoxStyles,
  certifications,
  credentialLinks,
  projects,
  skills,
} from "../utils/constants";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DownloadOutlined } from "@mui/icons-material";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CustomCard from "@/components/Card";

const Home = () => {
  const [gridAreasContacts, setGridAreasContacts] = useState(`
    "email 
    github 
    linkedin"
  `);
  const [gridAreasSkills, setGridAreasSkills] = useState(`
    "technologies certifications"
  `);

  const { darkMode } = useThemeStore();
  const theme = useTheme();

  theme.palette.mode = darkMode ? "dark" : "light";

  useEffect(() => {
    const handleResize = () => {
      setGridAreasContacts(
        window.innerWidth > 640
          ? `
            "email github"
            "linkedin linkedin"
          `
          : `
            "email"
            "github"
            "linkedin"
          `
      );
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setGridAreasSkills(
        window.innerWidth > 640
          ? `
            "technologies certifications"
          `
          : `
            "technologies"
            "certifications"
          `
      );
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        baseBoxStyles,
        `${
          theme.palette.mode === "dark"
            ? "bg-linear-[0deg,rgba(34,23,122,1)_0%,rgba(113,111,178,0.7)_60%,rgba(142,163,166,1)_90%,rgba(153,153,153,1)_100%]"
            : " bg-linear-[0deg,rgba(51,40,139,0.7)_0%,rgba(96,94,161,1)_60%,rgba(159,180,183,0.7)_90%,rgba(170,170,170,0.7)_100%]"
        } flex-col gap-10`
      )}
    >
      <div
        id="about"
        className={cn(
          baseBoxStyles,
          "flex-wrap gap-10 max-w-[75vw] mx-auto my-10 sm:flex-col sm:items-center md:flex-row md:justify-center md:items-center md:max-w-[50vw] xl:max-w-[60vw]"
        )}
      >
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-screen sm:max-w-[40vw] md:max-w-[35vw] lg:max-w-[25vw] xl:max-w-[20vw] mb-10"
        >
          <AspectRatio ratio={1 / 1}>
            <img
              src="/images/profile.jpg"
              alt="profile picture"
              className="rounded-full w-full h-full object-cover border-4 border-[#000] dark:border-[#fff]"
            />
          </AspectRatio>
        </motion.div>

        <div className="flex flex-wrap">
          <div className="flex flex-col gap-5 sm:align-center sm:justify-center md:items-start md:justify-start">
            <motion.h3
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
              style={{
                color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
              }}
              initial={{
                translateX: -100,
                opacity: 0,
              }}
              animate={{
                translateX: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
            >
              Hello! My name is Darenz Jasper A. Hicap,
            </motion.h3>

            <motion.p
              className="leading-7 [&:not(:first-child)]:mt-6 text-justify"
              initial={{ translateX: -100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              style={{
                color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
              }}
            >
              A 22-years old web developer, lived in Rosario, Cavite,
              Philippines. Currently studying Bachelor of Science in Information
              Technology in Cavite State University - Main Campus. Specializing
              in full-stack web development using PERN stack (PostgreSQL,
              Express, React, Node.js) and MERN stack (MySQL, Express, React,
              Node.js). I am highly motivated and eager to learn new web
              technologies and frameworks to help me improve my skills as a
              developer.
            </motion.p>

            <motion.p
              className="leading-7 [&:not(:first-child)]:mt-6 text-justify"
              initial={{ translateX: -100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
              }}
            >
              You can contact me through my email, LinkedIn, or GitHub account
              indicated below:
            </motion.p>

            <motion.div
              className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(40vw,_1fr))]"
              style={{
                gridTemplateAreas: gridAreasContacts,
              }}
              initial={{ translateX: -100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
            >
              {credentialLinks.map((credential, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 text-lg font-semibold"
                  style={{
                    color:
                      theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                  }}
                >
                  {credential.name === "email" && (
                    <SendIcon
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                      }}
                    />
                  )}
                  {credential.name === "github" && (
                    <GitHubIcon
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                      }}
                    />
                  )}
                  {credential.name === "linkedin" && (
                    <LinkedInIcon
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                      }}
                    />
                  )}
                  <a
                    href={credential.link}
                    target="_blank"
                    className="hover:focus:underline"
                  >
                    {credential.link.includes("mailto")
                      ? credential.link.split("mailto:")[1]
                      : credential.link.split("https://")[1]}
                  </a>
                </p>
              ))}
            </motion.div>

            <p
              className="leading-7"
              style={{
                color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
              }}
            >
              Or download my resume:
            </p>
            <Button variant="link" asChild className="relative">
              <div className="absolute flex items-center gap-2 border-2 border-[#000] dark:border-[#fff] p-2 rounded-md">
                <DownloadOutlined />
                <a
                  href="https://drive.google.com/drive/folders/1z5k0cXU6HfPy3AV9yGlnmxecilbXYYRm"
                  target="_blank"
                  className="font-semibold hover:focus:underline"
                >
                  Download Resume
                </a>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        id="skills"
        className={cn(baseBoxStyles, "w-full flex flex-col gap-10")}
      >
        <div
          className="w-full grid gap-6 p-10 sm:grid-cols-[1fr] md:p-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.5fr_1fr] bg-linear-[0deg,rgba(96,94,161,0.5)_0%,rgba(142,163,166,0.4)_60%,rgba(153,153,153,0.3)_100%]"
          style={{
            gridTemplateAreas: gridAreasSkills,
          }}
        >
          <div
            style={{
              gridArea: "technologies",
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-full flex flex-col gap-10 justify-center"
              >
                <h4 className="relative mb-5 text-2xl font-bold">
                  {skill.name}
                  <span
                    className="absolute left-1/2 bottom-[-8px] w-full h-[4px] transform translate-x-[-50%]"
                    style={{
                      background:
                        theme.palette.mode === "dark" ? "#fff" : "#000",
                    }}
                  />
                </h4>
                <div className="grid gap-5 mb-5 justify-items-center grid-cols-[repeat(auto-fit,_minmax(25vw,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(10vw,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(15vw,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(17vw,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(12vw,1fr))]">
                  {skill.skills.length > 0 &&
                    skill.skills.map((skill, index) => (
                      <CustomCard
                        key={index}
                        title={skill}
                        imgSrc={`images/skills/${skill.toLowerCase()}.png`}
                        theme={theme.palette.mode}
                      />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pl-5 sm:border-l-5 sm:border-[#000] sm:dark:border-[#fff]  xl:max-h-[110dvh] 2xl:max-h-[150dvh] lg:overflow-y-auto scroll-mr-2.5 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent">
            <h4 className="relative mb-5 text-2xl font-bold">
              Certifications
              <span
                className="absolute left-1/2 bottom-[-8px] w-full h-[4px] transform translate-x-[-50%] bg-[#000] dark:bg-[#fff]"
                style={{
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              />
            </h4>
            {certifications.length > 0 &&
              certifications.map((certification, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <h6
                    className="my-5 text-[1rem] font-bold"
                    style={{
                      color:
                        theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                    }}
                  >
                    {certification.name}
                  </h6>

                  {certification.certifications.length > 0 &&
                    certification.certifications.map((cert, index) => (
                      <Card
                        key={index}
                        className="grid gap-3 justify-items-center items-center text-center p-3 rounded-md bg-opacity-10 sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] !mix-blend-hard-light"
                        style={{
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "#2c3a33a8"
                              : "#f0f0f0",
                        }}
                      >
                        <AspectRatio ratio={16 / 9} className="p-2">
                          <img
                            src={`images/certifications/${cert}.png`}
                            alt={cert}
                            className="rounded-md aspect-video"
                          />
                        </AspectRatio>
                        <h6
                          className="text-xl font-semibold"
                          style={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#f0f0f0"
                                : "#2c3a33",
                          }}
                        >
                          {cert}
                        </h6>
                      </Card>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        id="projects"
        className={cn(baseBoxStyles, "w-full flex flex-col gap-10")}
      >
        <h2 className="text-3xl font-bold">My Notable Projects</h2>
        <div className="grid w-full gap-10 p-10 sm:grid-cols-[1fr] md:grid-cols-[repeat(auto-fill,minmax(30vw,1fr))]">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <Card
                key={index}
                className="w-full grid gap-5 p-4 justify-items-center content-between text-center rounded-md bg-linear-[0deg,rgba(96,94,161,0.5)_0%,rgba(142,163,166,0.4)_60%,rgba(153,153,153,0.3)_100%]"
                style={{
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(0deg, rgba(96,94,161,0.5) 0%, rgba(142,163,166,0.4) 60%, rgba(153,153,153,0.3) 100%)"
                      : "#f0f0f0",
                  gridTemplateAreas: `
                  "img"
                  "content"
                  "buttons"
                  `,
                }}
              >
                {project.imgSrc && (
                  <AspectRatio ratio={16 / 9} className="p-2">
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className="rounded-md aspect-video"
                    />
                  </AspectRatio>
                )}
                <div
                  className="flex flex-col gap-2 items-center"
                  style={{
                    gridArea: "content",
                  }}
                >
                  <h6
                    className="text-2xl font-bold"
                    style={{
                      color:
                        theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                    }}
                  >
                    {project.title}
                  </h6>
                  <p
                    className="text-lg"
                    style={{
                      color:
                        theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.length > 0 &&
                      project.technologies.map((tech, index) => (
                        <div key={index} className="w-10 h-10">
                          <AspectRatio
                            ratio={1 / 1}
                            className={`${
                              theme.palette.mode === "dark"
                                ? "bg-[hsl(150,14%,20%)]"
                                : "bg-[#f9fafa]"
                            } rounded-md`}
                          >
                            <img
                              src={`images/skills/${tech.toLowerCase()}.png`}
                              alt={tech}
                              className="rounded-md aspect-video h-full w-full"
                            />
                          </AspectRatio>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className="flex  flex-wrap gap-2 justify-center w-full"
                  style={{
                    gridArea: "buttons",
                  }}
                >
                  {project.github && (
                    <Button variant="link" asChild className="relative">
                      <div className="absolute flex items-center gap-2 border-2 border-[#000] dark:border-[#fff] p-2 rounded-md">
                        <GitHubIcon />
                        <a
                          href={project.github}
                          target="_blank"
                          className="font-semibold hover:focus:underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </Button>
                  )}

                  {project.demo && (
                    <Button variant="link" asChild className="relative">
                      <div className="absolute flex items-center gap-2 border-2 border-[#000] dark:border-[#fff] p-2 rounded-md">
                        <SendIcon />
                        <a
                          href={project.demo}
                          target="_blank"
                          className="font-semibold hover:focus:underline"
                        >
                          Demo
                        </a>
                      </div>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
