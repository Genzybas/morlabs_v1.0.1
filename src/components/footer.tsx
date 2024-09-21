"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["Explore APIs", "Documentation", "About Us", "Contact Us", "Careers"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 dark:bg-gray-800 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="#"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4 dark:text-gray-300"
            >
              Morlabs-Chain
            </Typography>
            <Typography color="white" className="mb-12 font-normal dark:text-gray-400">
              Unveiling the Future of Integrating SDK And API Into web3
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors dark:text-gray-400 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3 dark:text-gray-300">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center dark:bg-gray-700 dark:text-white"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
                color="white"
                className="flex items-center justify-center dark:bg-gray-700 dark:text-white"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between dark:border-gray-600">
          <Typography
            color="white"
            className="text-center font-normal opacity-75 dark:text-gray-400"
          >
            &copy;   {" "} 
            <a href="" target="_blank">
             Morlabs
            </a> Copyrigts {CURRENT_YEAR} {" "}.
            {" "}
            {" "}
            <a href="#" target="_blank">
              Term of Service.
            </a>
            {" "}
            {" "}
            {" "}
            <a href="#" target="_blank">
              Privacy Policy
            </a>
            
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75 dark:text-gray-300"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75 dark:text-gray-300"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75 dark:text-gray-300"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75 dark:text-gray-300"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75 dark:text-gray-300"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
