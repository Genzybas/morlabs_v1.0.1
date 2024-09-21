"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference or system theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to root element
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 dark:bg-gray-800 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Your Gateway to Seamless <br />
              <span className="gradient-text">Web3</span> Integration
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Accelerate Your Web3 Journey: Explore, Build, and Scale With Our API Directory
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                EXPLORE APIs
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white dark:bg-gray-900 p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="h3"
            color={darkMode ? "white" : "blue-gray"}
            className="mb-3"
          >
            Comprehensive API Directory
          </Typography>
          <Typography
            variant="paragraph"
            className={`font-normal lg:w-5/12 ${darkMode ? 'text-white' : 'text-gray-500'} dark:text-white`}
          >
            Explore a wide range of APIs, organized by domain,
            for seamless integration into your web3 projects.
          </Typography>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50 flex items-center justify-center"
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </div>
  );
}

export default Hero;
