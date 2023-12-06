import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, settheme] = useState("dark-theme");
  const toggletheme = () => {
    if (theme === "dark-theme") {
      settheme("light-theme");
    } else {
      settheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <nav>
        <div className="title ">my todo app</div>
        <div className="toggle-btn" onClick={() => toggletheme()}>
          change me
        </div>
      </nav>
    </>
  );
};

export default Navbar;
