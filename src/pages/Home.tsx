import { Box, Card, Typography, useTheme } from "@mui/material";
import { useThemeStore } from "../utils/stores";
import {
  certifications,
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

const Home = () => {
  const { darkMode } = useThemeStore();
  const theme = useTheme();

  theme.palette.mode = darkMode ? "dark" : "light";

  return (
    <StyledContainer>
      <StyledBoxComponent
        id="about"
        sx={{
          flexWrap: "wrap",
          gap: theme.spacing(5),
          maxWidth: "75vw",
          marginX: "auto",
          marginY: theme.spacing(5),
          "@media (max-width: 640px)": {
            flexDirection: "column",
            alignItems: "center",
          },
          "@media (min-width: 641px)": {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <StyledImageComponent
          src="/images/profile.jpg"
          alt="profile picture"
          sx={{
            borderRadius: "50%",
            width: 300,
            height: 300,
            flex: "0 0 auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "column",
            gap: theme.spacing(5),
            flex: "1 1 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(2),
              "@media (max-width: 640px)": {
                alignItems: "center",
                justifyContent: "center",
              },
              "@media (min-width: 641px)": {
                alignItems: "flex-start",
                justifyContent: "flex-start",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              Hello! My name is Darenz Jasper A. Hicap,
            </Typography>
            <Typography variant="subtitle1">
              Currently studying Bachelor of Science in Information Technology
              in Cavite State University - Main Campus. I am specializing
              full-stack developer with a passion for creating web applications
              using various web technology such as React JS, Tailwind CSS, Node
              JS, Express, PostgreSQL. I am also interested in learning new web
              technologies and tools that can help me improve my skills as a
              developer.
            </Typography>

            <Typography variant="subtitle1">
              You can contact me through my email, LinkedIn, or GitHub account
              indicated below:
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: theme.spacing(2),
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gridTemplateRows: "repeat(2, 1fr)",
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
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                gap: theme.spacing(1),
                gridArea: "email",
              }}
            >
              <SendIcon />:
              <a href="mailto:hicap.darenzjasper@gmail.com">
                hicap.darenzjasper@gmail.com
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                gap: theme.spacing(1),
                gridArea: "github",
              }}
            >
              <GitHubIcon />:
              <a href="https://github.com/Hakdoooooooooooog" target="_blank">
                https://github.com/Hakdoooooooooooog
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                gap: theme.spacing(1),
                gridArea: "linkedin",
              }}
            >
              <LinkedInIcon />:
              <a
                href="https://www.linkedin.com/in/darenz-hicap-58307b339/"
                target="_blank"
              >
                https://www.linkedin.com/in/darenz-hicap-58307b339/
              </a>
            </Typography>
          </Box>
        </Box>
      </StyledBoxComponent>

      <StyledBoxComponent
        id="skills"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(5),
        }}
      >
        <Box
          sx={{
            display: "grid",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "dark" ? "#666" : "hsl(0, 0%, 80%)",
            padding: theme.spacing(5),
            gap: theme.spacing(3),
            alignContent: "center",
            background:
              "linear-gradient(0deg, rgba(96,94,161,0.5) 0%, rgba(142,163,166,0.4) 60%, rgba(153,153,153,0.3) 100%)",
            "@media (max-width: 640px)": {
              gridTemplateAreas: `
                    "technologies"
                    "certifications"
                  `,
              gridTemplateColumns: "1fr",
            },
            "@media (min-width: 641px)": {
              gridTemplateAreas: `
                    "technologies certifications"

                  `,
              gridTemplateColumns: "1fr  1fr",
            },
          }}
        >
          <Box
            sx={{
              gridArea: "technologies",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: theme.spacing(10),
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                marginBottom: theme.spacing(2),
              }}
            >
              Frontend
              <Box
                component={"span"}
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -8,
                  width: "100%",
                  height: "4px",
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                  transform: "translateX(-50%)",
                }}
              />
            </Typography>
            <Box
              sx={{
                display: "grid",
                width: "100%",
                justifyItems: "center",
                gap: theme.spacing(2),
                "@media (max-width: 640px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                },
                "@media (min-width: 641px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                },
              }}
            >
              {skills.frontend.length > 0 &&
                skills.frontend.map((skill, index) => (
                  <CustomCard
                    key={index}
                    title={skill}
                    imgSrc={`images/skills/${skill.toLowerCase()}.png`}
                    theme={theme.palette.mode}
                  />
                ))}
            </Box>

            <Typography
              variant="h4"
              sx={{
                position: "relative",
                marginBottom: theme.spacing(2),
              }}
            >
              Backend
              <Box
                component={"span"}
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -8,
                  width: "100%",
                  height: "4px",
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                  transform: "translateX(-50%)",
                }}
              />
            </Typography>
            <Box
              sx={{
                display: "grid",
                width: "100%",
                justifyItems: "center",
                gap: theme.spacing(2),
                "@media (max-width: 640px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                },
                "@media (min-width: 641px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                },
              }}
            >
              {skills.backend.length > 0 &&
                skills.backend.map((skill, index) => (
                  <CustomCard
                    key={index}
                    title={skill}
                    imgSrc={`images/skills/${skill.toLowerCase()}.png`}
                    theme={theme.palette.mode}
                  />
                ))}
            </Box>

            <Typography
              variant="h4"
              sx={{
                position: "relative",
                marginBottom: theme.spacing(2),
              }}
            >
              Others
              <Box
                component={"span"}
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -8,
                  width: "100%",
                  height: "4px",
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                  transform: "translateX(-50%)",
                }}
              />
            </Typography>
            <Box
              sx={{
                display: "grid",
                width: "100%",
                justifyItems: "center",
                gap: theme.spacing(2),
                "@media (max-width: 640px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                },
                "@media (min-width: 641px)": {
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                },
              }}
            >
              {skills.others.length > 0 &&
                skills.others.map((skill, index) => (
                  <CustomCard
                    key={index}
                    title={skill}
                    imgSrc={`images/skills/${skill.toLowerCase()}.png`}
                    theme={theme.palette.mode}
                  />
                ))}
            </Box>
          </Box>

          <Box
            sx={{
              gridArea: "certifications",
              paddingLeft: theme.spacing(2),
              "@media (max-width: 640px)": {
                paddingLeft: 0,
              },
              "@media (min-width: 641px)": {
                paddingLeft: theme.spacing(5),
                borderLeft:
                  theme.palette.mode === "dark"
                    ? "5px solid #fff"
                    : "5px solid #000",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: "relative",
                marginBottom: theme.spacing(2),
              }}
            >
              Certifications
              <Box
                component={"span"}
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: -8,
                  width: "100%",
                  height: "4px",
                  background: theme.palette.mode === "dark" ? "#fff" : "#000",
                  transform: "translateX(-50%)",
                }}
              />
            </Typography>
            {certifications.length > 0 &&
              certifications.map((certification, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(2),
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      marginY: theme.spacing(2),
                    }}
                  >
                    {certification.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gap: theme.spacing(1),
                    }}
                  >
                    {certification.certifications.length > 0 &&
                      certification.certifications.map((cert, index) => (
                        <Card
                          key={index}
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "auto 1fr",
                            gap: theme.spacing(2),
                            alignItems: "center",
                            padding: 1,
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <StyledImageComponent
                            src={`images/certifications/${cert}.png`}
                            alt="cisco"
                            sx={{
                              width: "300px",
                              height: "200px",
                              padding: 1,
                            }}
                          />
                          <Typography variant="h6">{cert}</Typography>
                        </Card>
                      ))}
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </StyledBoxComponent>

      <StyledBoxComponent
        id="projects"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(5),
          marginBottom: theme.spacing(5),
        }}
      >
        <Typography variant="h4">My Notable Projects</Typography>
        <Box
          sx={{
            display: "grid",
            width: "100%",
            gap: theme.spacing(5),
            "@media (max-width: 640px)": {
              gridTemplateColumns: "1fr",
              padding: theme.spacing(2),
            },
            "@media (min-width: 641px)": {
              gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
              padding: theme.spacing(10),
            },
          }}
        >
          {projects.length > 0 &&
            projects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  display: "grid",
                  justifyItems: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: theme.spacing(2),
                  gap: theme.spacing(2),
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  background:
                    "linear-gradient(0deg, rgba(96,94,161,0.5) 0%, rgba(142,163,166,0.4) 60%, rgba(153,153,153,0.3) 100%)",
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
                    sx={{
                      gridArea: "img",
                      width: 250,
                      height: 150,
                      borderRadius: 2,
                    }}
                  />
                )}
                <Box
                  sx={{
                    gridArea: "content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: theme.spacing(2),
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1">{project.description}</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: theme.spacing(2),
                    }}
                  >
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
                  sx={{
                    gridArea: "buttons",
                    display: "flex",
                    gap: theme.spacing(2),
                  }}
                >
                  <Box
                    component={"a"}
                    href={project.github}
                    target="_blank"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: theme.spacing(1),
                      padding: theme.spacing(1),
                      borderRadius: 2,
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#666" : "#f9fafa",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      textDecoration: "none",
                    }}
                  >
                    <GitHubIcon />
                    <Typography>GitHub</Typography>
                  </Box>

                  <Box
                    component={"a"}
                    href={project.demo}
                    target="_blank"
                    sx={{
                      display: project.demo ? "flex" : "none",
                      alignItems: "center",
                      gap: theme.spacing(1),
                      padding: theme.spacing(1),
                      borderRadius: 2,
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#666" : "#f9fafa",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      textDecoration: "none",
                    }}
                  >
                    <SendIcon />
                    <Typography>Visit</Typography>
                  </Box>
                </Box>
              </Card>
            ))}
        </Box>
      </StyledBoxComponent>
    </StyledContainer>
  );
};

export default Home;
