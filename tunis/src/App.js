import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <AllRoutes />
    </>
  );
};

export default App;
