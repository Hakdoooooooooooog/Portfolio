import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactLenis } from "lenis/react";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Outlet />
      </ReactLenis>
      <Footer />
    </>
  );
};

export default RootLayout;
