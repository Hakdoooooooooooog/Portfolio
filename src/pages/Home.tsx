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
import RevealItem from "@/components/RevealItem";

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
        } flex-col gap-10 transition-all duration-500 ease-in-out`
      )}
    >
      <div
        id="about"
        className={cn(
          baseBoxStyles,
          "flex-wrap gap-10 max-w-[75vw] mx-auto my-10 sm:flex-col sm:items-center md:flex-row md:justify-center md:items-center md:max-w-[50vw] xl:max-w-[60vw]"
        )}
      >
        <RevealItem classname="flex items-center justify-center gap-5">
          <div className="w-[70vw] sm:max-w-[35vw] md:max-w-[30vw] lg:max-w-[20vw] xl:max-w-[15vw] mb-10">
            <AspectRatio ratio={1 / 1}>
              <img
                src="/images/profile.jpg"
                alt="profile picture"
                className="rounded-full w-full h-full object-cover border-4 border-[#000] dark:border-[#fff]"
              />
            </AspectRatio>
          </div>
        </RevealItem>

        <div className="flex flex-wrap">
          <div className="flex flex-col gap-5 sm:align-center sm:justify-center md:items-start md:justify-start">
            <RevealItem>
              <h3
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                style={{
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                }}
              >
                Hello! My name is Darenz Jasper A. Hicap,
              </h3>
            </RevealItem>

            <RevealItem>
              <p
                className="leading-7 [&:not(:first-child)]:mt-6 text-justify"
                style={{
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                }}
              >
                A 22-years old web developer, lived in Rosario, Cavite,
                Philippines. Currently studying Bachelor of Science in
                Information Technology in Cavite State University - Main Campus.
                Specializing in full-stack web development using PERN stack
                (PostgreSQL, Express, React, Node.js) and MERN stack (MySQL,
                Express, React, Node.js). I am highly motivated and eager to
                learn new web technologies and frameworks to help me improve my
                skills as a developer.
              </p>
            </RevealItem>

            <RevealItem>
              <p
                className="leading-7 [&:not(:first-child)]:mt-6 text-justify"
                style={{
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                }}
              >
                You can contact me through my email, LinkedIn, or GitHub account
                indicated below:
              </p>
            </RevealItem>

            <div
              className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(40vw,_1fr))]"
              style={{
                gridTemplateAreas: gridAreasContacts,
              }}
            >
              {credentialLinks.map((credential, index) => (
                <RevealItem key={index}>
                  <p
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
                            theme.palette.mode === "dark"
                              ? "#f0f0f0"
                              : "#2c3a33",
                        }}
                      />
                    )}
                    {credential.name === "github" && (
                      <GitHubIcon
                        sx={{
                          color:
                            theme.palette.mode === "dark"
                              ? "#f0f0f0"
                              : "#2c3a33",
                        }}
                      />
                    )}
                    {credential.name === "linkedin" && (
                      <LinkedInIcon
                        sx={{
                          color:
                            theme.palette.mode === "dark"
                              ? "#f0f0f0"
                              : "#2c3a33",
                        }}
                      />
                    )}
                    <a
                      href={credential.link}
                      target="_blank"
                      className="hover:focus:underline"
                      style={{
                        wordWrap: "break-word",
                        width: window.innerWidth < 364 ? "23ch" : "100%",
                        overflow: "hidden",
                      }}
                    >
                      {credential.link.includes("mailto")
                        ? credential.link.split("mailto:")[1]
                        : credential.link.split("https://")[1]}
                    </a>
                  </p>
                </RevealItem>
              ))}
            </div>

            <RevealItem>
              <p
                className="leading-7"
                style={{
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#2c3a33",
                }}
              >
                Or download my resume:
              </p>
              <Button variant="link" asChild className="relative mt-5">
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
            </RevealItem>
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
              <div
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
                <div className="grid gap-10 mb-5 justify-items-center grid-cols-[repeat(auto-fit,_minmax(25vw,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(20vw,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(15vw,_1fr))] min-md:min-lg:grid-cols-[repeat(auto-fit,minmax(15vw,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(12vw,1fr))]">
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
              </div>
            ))}
          </div>

          <div
            className="sm:pl-5 sm:border-l-5 sm:border-opacity-10"
            style={{
              borderColor: theme.palette.mode === "dark" ? "#fff" : "#000",
            }}
          >
            <h4 className="relative mb-5 text-2xl font-bold">
              Certifications
              <span
                className="absolute left-1/2 bottom-[-8px] w-full h-[4px] transform translate-x-[-50%]"
                style={{
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              />
            </h4>
            <div
              data-lenis-prevent
              className="max-h-fit xl:max-h-[135dvh] 2xl:max-h-[150dvh] lg:overflow-y-auto [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent"
            >
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
                        <RevealItem key={index}>
                          <Card
                            className="grid gap-3 justify-items-center items-center text-center p-3 rounded-md bg-opacity-10 sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] !mix-blend-hard-light"
                            style={{
                              backgroundColor:
                                theme.palette.mode === "dark"
                                  ? "#2c3a33a8"
                                  : "#f0f0f0",
                            }}
                          >
                            <div className="w-[70vw] sm:max-w-[35vw] md:max-w-[30vw] lg:max-w-[25vw] xl:max-w-[20vw]">
                              <AspectRatio ratio={16 / 9} className="p-2">
                                <img
                                  src={`images/certifications/${cert}.png`}
                                  alt={cert}
                                  className="rounded-md aspect-video"
                                />
                              </AspectRatio>
                            </div>
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
                        </RevealItem>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className={cn(baseBoxStyles, "w-full flex flex-col gap-10 pb-10")}
      >
        <h2 className="text-3xl font-bold">My Notable Projects</h2>
        <div className="grid w-full gap-4 p-3 sm:grid-cols-[1fr] md:grid-cols-[repeat(auto-fill,minmax(35vw,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(30vw,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(25vw,1fr))]">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <RevealItem key={index}>
                <Card
                  className="h-[70dvh] max-h-[50dvh] sm:max-h-[53dvh] md:max-h-[55dvh] lg:max-h-[65dvh] max-xl:max-h-[67dvh] grid gap-4 p-4 justify-items-center content-between text-center rounded-md bg-linear-[0deg,rgba(96,94,161,0.5)_0%,rgba(142,163,166,0.4)_60%,rgba(153,153,153,0.3)_100%]"
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
                    <div
                      className="w-[70dvw] sm:max-w-[42dvw] md:max-w-[33dvw] lg:max-w-[28dvw] xl:max-w-[25dvw]"
                      style={{ gridArea: "img" }}
                    >
                      <AspectRatio ratio={16 / 9} className="p-2">
                        <img
                          src={project.imgSrc}
                          alt={project.title}
                          className="rounded-md aspect-video"
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <div
                    className="flex flex-col gap-4 justify-evenly items-center w-full"
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
              </RevealItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
