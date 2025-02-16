import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeStore } from "../utils/stores";
import { StyledAppBar, StyledToolbar } from "../utils/constants";

const Navbar = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useThemeStore();

  theme.palette.mode = darkMode ? "dark" : "light";

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Switch
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
            color="default"
          />
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
