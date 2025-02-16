import { useTheme } from "@mui/material";
import { StyledFooter } from "../utils/constants";
import { useThemeStore } from "../utils/stores";

const Footer = () => {
  const theme = useTheme();
  const { darkMode } = useThemeStore();
  theme.palette.mode = darkMode ? "dark" : "light";
  return (
    <StyledFooter>
      © 2025 Portfolio. Created by Darenz Jasper Hicap
    </StyledFooter>
  );
};

export default Footer;
