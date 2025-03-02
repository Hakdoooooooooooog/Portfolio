import { useTheme } from "@mui/material";
import { useThemeStore } from "../utils/stores";

const Footer = () => {
  const theme = useTheme();
  const { darkMode } = useThemeStore();
  theme.palette.mode = darkMode ? "dark" : "light";
  return (
    <div
      className="flex justify-center items-center w-full gap-4 p-4"
      style={{
        background:
          theme.palette.mode === "dark" ? "hsl(260,14%,8%)" : "#f9fafa",
        color:
          theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.7)"
            : "rgba(0, 0, 0, 0.87)",
      }}
    >
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a href="#" target="_blank" rel="noreferrer" className="text-blue-500">
          Darenz Jasper Hicap {""}
        </a>
        © 2025 Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
