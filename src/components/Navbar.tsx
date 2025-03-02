import { useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeStore } from "../utils/stores";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useThemeStore();

  theme.palette.mode = darkMode ? "dark" : "light";

  return (
    <div
      className="w-full h-fit flex justify-between items-center text-white p-5 opacity-90 fixed top-0 z-10 backdrop-blur-lg border-b-2 border-b-gray-100"
      style={{
        backgroundColor: darkMode ? "hsl(252,12%,8%)" : "#f5f5f5",
      }}
    >
      <h1
        className="text-2xl font-bold"
        style={{
          color: darkMode ? "hsl(0,0%,100%)" : "hsl(0,0%,0%)",
        }}
      >
        Portfolio
      </h1>
      <div
        className="flex items-center space-x-2"
        style={{
          color: darkMode ? "hsl(0,0%,100%)" : "hsl(0,0%,0%)",
        }}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        <Switch
          id="darkModeSwitch"
          checked={darkMode}
          onChange={toggleDarkMode}
          onClick={toggleDarkMode}
          color={darkMode ? "primary" : "default"}
        />
      </div>
    </div>
  );
};

export default Navbar;
