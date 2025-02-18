import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import { useThemeStore } from "../utils/stores";
import {
  certifications,
  credentialLinks,
  projects,
  skills,
  StyledBoxComponent,
  StyledContainer,
  StyledImageComponent,
} from "../utils/constants";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomCard from "../components/Card";
import { DownloadOutlined } from "@mui/icons-material";

const Home = () => {
  const { darkMode } = useThemeStore();
  const theme = useTheme();

  theme.palette.mode = darkMode ? "dark" : "light";

  return (
    <StyledContainer>
      <StyledBoxComponent
        id="about"
        className="flex-wrap gap-10 max-w-[70vw] mx-auto my-10 sm:flex-col sm:items-center md:flex-row md:justify-center md:items-center"
      >
        <StyledImageComponent
          src="/images/profile.jpg"
          alt="profile picture"
          className="rounded-full !w-[25rem] !h-[25rem] flex-[0_0_auto] mb-5"
        />
        <Box component={"div"} className="flex flex-wrap">
          <Box
            component={"div"}
            className="flex flex-col gap-5 sm:align-center sm:justify-center md:items-start md:justify-start"
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              Hello! My name is Darenz Jasper A. Hicap,
            </Typography>

            <Typography variant="subtitle1" className="!text-justify">
              A 22-years old web developer, lived in Rosario, Cavite,
              Philippines. Currently studying Bachelor of Science in Information
              Technology in Cavite State University - Main Campus. Specializing
              in full-stack web development using PERN stack (PostgreSQL,
              Express, React, Node.js) and MERN stack (MySQL, Express, React,
              Node.js). I am highly motivated and eager to learn new web
              technologies and frameworks to help me improve my skills as a
              developer.
            </Typography>

            <Typography variant="subtitle1" className="!text-justify">
              You can contact me through my email, LinkedIn, or GitHub account
              indicated below:
            </Typography>

            <Box
              component={"div"}
              className="w-full grid gap-5 grid-cols-[repeat(auto-fit,_minmax(30vw,_1fr))] grid-rows-2"
              sx={{
                gridTemplateAreas: `
                  "email linkedin"
                  "github github"
                `,
                "@media (max-width: 640px)": {
                  gridTemplateAreas: `
                    "email"
                    "linkedin"
                    "github"
                  `,
                },
              }}
            >
              {credentialLinks.map((credential, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    display: "flex",
                    gap: theme.spacing(1),
                    gridArea: credential.name,
                  }}
                >
                  {credential.name === "email" && <SendIcon />}
                  {credential.name === "github" && <GitHubIcon />}
                  {credential.name === "linkedin" && <LinkedInIcon />}
                  <Box
                    component={"a"}
                    href={credential.link}
                    target="_blank"
                    className="hover:focus:underline"
                  >
                    {credential.link.includes("mailto")
                      ? credential.link.split("mailto:")[1]
                      : credential.link.split("https://")[1]}
                  </Box>
                </Typography>
              ))}
            </Box>

            <Typography variant="subtitle1" className="!text-justify">
              Or download my resume:
            </Typography>
            <Button
              variant="outlined"
              startIcon={<DownloadOutlined />}
              href="https://drive.google.com/file/d/1F-SaiHUiLTZfFG0KyoD5EE6N7ByUTHdi/view?usp=drive_link"
              target="_blank"
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                borderColor: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>
      </StyledBoxComponent>

      <StyledBoxComponent id="skills" className="w-full flex flex-col gap-10">
        <Box
          component={"div"}
          className="w-full grid gap-6 p-10 sm:grid-cols-[1fr] md:p-5 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.5fr_1fr] bg-[#666] dark:bg-[hsl(0, 0%, 80%)]"
          sx={{
            background:
              "linear-gradient(0deg, rgba(96,94,161,0.5) 0%, rgba(142,163,166,0.4) 60%, rgba(153,153,153,0.3) 100%)",
            "@media (max-width: 640px)": {
              gridTemplateAreas: `
                    "technologies"
                    "certifications"
                  `,
            },
            "@media (min-width: 641px)": {
              gridTemplateAreas: `
                    "technologies certifications"
                  `,
            },
          }}
        >
          <Box sx={{ gridArea: "technologies" }}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                component={"div"}
                className="w-full flex flex-col gap-10 justify-center"
              >
                <Typography variant="h4" className="relative">
                  {skill.name}
                  <Box
                    component={"span"}
                    className="absolute left-1/2 bottom-[-8px] w-full h-[4px] transform translate-x-[-50%]"
                    sx={{
                      background:
                        theme.palette.mode === "dark" ? "#fff" : "#000",
                    }}
                  />
                </Typography>
                <Box
                  component={"div"}
                  className="grid gap-5 mb-5 justify-items-center sm:grid-cols-[repeat(auto-fit,_minmax(10vw,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(15vw,1fr))]"
                >
                  {skill.skills.length > 0 &&
                    skill.skills.map((skill, index) => (
                      <CustomCard
                        key={index}
                        title={skill}
                        imgSrc={`images/skills/${skill.toLowerCase()}.png`}
                        theme={theme.palette.mode}
                      />
                    ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            component={"div"}
            className="pl-5 sm:border-l-5 sm:border-[#000] sm:dark:border-[#fff]"
          >
            <Typography variant="h4" className="relative mb-5">
              Certifications
              <Box
                component={"span"}
                className="absolute left-1/2 bottom-[-8px] w-full h-[4px] transform translate-x-[-50%] bg-[#000] dark:bg-[#fff]"
                sx={{
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                }}
              />
            </Typography>
            {certifications.length > 0 &&
              certifications.map((certification, index) => (
                <Box
                  key={index}
                  component={"div"}
                  className="flex flex-col gap-5"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginY: theme.spacing(2),
                    }}
                  >
                    {certification.name}
                  </Typography>

                  {certification.certifications.length > 0 &&
                    certification.certifications.map((cert, index) => (
                      <Card
                        key={index}
                        className="grid gap-3 justify-items-center items-center text-center p-3 rounded-md bg-opacity-10 sm:grid-cols-[1fr] md:grid-cols-[1fr_1fr] !mix-blend-hard-light"
                        sx={{
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "#2c3a33a8"
                              : "#f0f0f0",
                        }}
                      >
                        <StyledImageComponent
                          src={`images/certifications/${cert}.png`}
                          alt="cisco"
                          className="!rounded-md !w-[300px] !h-[200px] p-2"
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#fff"
                                : "text.primary",
                          }}
                        >
                          {cert}
                        </Typography>
                      </Card>
                    ))}
                </Box>
              ))}
          </Box>
        </Box>
      </StyledBoxComponent>

      <StyledBoxComponent
        id="projects"
        className="w-full flex flex-col gap-10 mb-10"
      >
        <Typography variant="h4">My Notable Projects</Typography>
        <Box
          component={"div"}
          className="grid w-full gap-10 p-10 sm:grid-cols-[1fr] md:grid-cols-[repeat(auto-fill,minmax(30vw,1fr))]"
        >
          {projects.length > 0 &&
            projects.map((project, index) => (
              <Card
                key={index}
                className="w-full grid gap-5 p-4 justify-items-center content-between text-center rounded-md"
                sx={{
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
                  <StyledImageComponent
                    src={project.imgSrc}
                    alt={project.title}
                    className="!rounded-md !w-[25rem] !h-[15rem]"
                    sx={{
                      gridArea: "img",
                    }}
                  />
                )}
                <Box
                  component={"div"}
                  className="flex flex-col gap-2 items-center"
                  sx={{
                    gridArea: "content",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box component={"div"} className="flex flex-wrap gap-2">
                    {project.technologies &&
                      project.technologies.length > 0 &&
                      project.technologies.map((tech, index) => (
                        <StyledImageComponent
                          key={index}
                          src={`images/skills/${tech.toLowerCase()}.png`}
                          alt={tech}
                          sx={{
                            width: 50,
                            height: 50,
                          }}
                        />
                      ))}
                  </Box>
                </Box>
                <Box
                  component={"div"}
                  className="flex  flex-wrap gap-2 justify-center w-full"
                  sx={{
                    gridArea: "buttons",
                  }}
                >
                  {project.github && (
                    <Button
                      component="a"
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      className="sm:w-[100%] md:w-fit"
                      sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                        borderColor:
                          theme.palette.mode === "dark" ? "#fff" : "#000",
                      }}
                    >
                      GitHub
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      component="a"
                      variant="outlined"
                      startIcon={<SendIcon />}
                      href={project.demo}
                      target="_blank"
                      className="sm:w-[100%] md:w-fit"
                      sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                        borderColor:
                          theme.palette.mode === "dark" ? "#fff" : "#000",
                      }}
                    >
                      Visit
                    </Button>
                  )}
                </Box>
              </Card>
            ))}
        </Box>
      </StyledBoxComponent>
    </StyledContainer>
  );
};

export default Home;
