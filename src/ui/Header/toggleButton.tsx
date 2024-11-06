"use client";

import { useLayoutEffect, useState } from "react";

function ToggleTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeThemeToDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkTheme(true);
  };

  const changeThemeToLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkTheme(false);
  };

  const toggle = (ev: any) => {
    ev.preventDefault();
    if (isDarkTheme) {
      changeThemeToLightMode();
    } else {
      changeThemeToDarkMode();
    }
  };

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      changeThemeToDarkMode();
    } else {
      changeThemeToLightMode();
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-32">
      <span className=" lg:text-[16px] text-[14px]">حالت شب :</span>
      <button onClick={toggle}>
        <label className="relative inline-block lg:w-[54px] md:w-[40px] lg:h-[28px] md:h-[20px]">
          <input
            className="peer opacity-0 w-0 h-0"
            type="checkbox"
            checked={isDarkTheme}
          />
          <span className="lg:rounded-[28px] md:rounded-[20px] before:rounded-[50%] peer-checked:bg-[#2196f3] peer-focus:shadow-[0_0_1_rgba[#2196F3]] absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] duration-[.4s] before:absolute lg:before:h-[20px] md:before:h-[15px] lg:before:w-[20px] md:before:w-[15px] before:left-[4px] lg:before:bottom-[4px] md:before:bottom-[2.5px] before:content-[''] before:bg-white before:duration-[.4s] lg:peer-checked:before:translate-x-[26px] md:peer-checked:before:translate-x-[17px]"></span>
        </label>
      </button>
    </div>
  );
}

export default ToggleTheme;
