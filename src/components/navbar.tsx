import React, { useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

// Define navItems here, or import them if they are defined in another file.
const navItems = {
  APIs: [
    { name: "NFT API", description: "Build any NFT app" },
    { name: "Token API", description: "Token balances and metadata" },
    { name: "Transfers API", description: "Complete transaction history in one call" },
    { name: "Gas Manager API", description: "Sponsor gas, boost transactions" },
    { name: "Smart Websockets", description: "Blockchain connection for ongoing data" },
    { name: "Supernode", description: "The web3 engine" },
  ],
  BlockChains: [
    { name: "Ethereum", description: "The mainnet of Ethereum blockchain" },
    { name: "Solana", description: "High-speed blockchain" },
  ],
  SDKs: [
    { name: "Javascript SDK", description: "Integrate with Javascript" },
    { name: "Python SDK", description: "Integrate with Python" },
  ],
  Tools: [
    { name: "Sandbox", description: "In-browser request sandbox." },
    { name: "Create Web3 Dapp", description: "Bootstrap a dapp in 4 minutes." },
  ],
  publish: [
    { name: "Submit API", description: "Publish" },
    { name: "API Guidelines", description: "Get Guided" },
  ],
  forum: [
    { name: "DAO Voting", description: "votes" },
    { name: "Discussion Forum", description: "meet" },
    { name: "Contribute", description: "Your ideas" },
  ],  
  morlabs: [
    { name: "About", description: "mission" },
    { name: "Contact", description: "Reach Out" },
    { name: "Careers", description: "Join Teams" },
  ],  
  docs: [
    { name: "Developer Docs", description: "mission" },
    { name: "API Doc Templates", description: "Reach Out" },
    { name: "Solana Integration", description: "Join Teams" },
    { name: "Sandbox/Test Environment", description: "Join Teams" },
  ], 
     
};

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  function handleOpenMenu() {
    setOpenMobileMenu((cur) => !cur);
  }

  function handleMouseOver(dropdownName: string) {
    setActiveDropdown(dropdownName);
  }

  function handleMouseLeave() {
    setActiveDropdown(null);
    setNestedDropdown(null); // Close nested dropdowns when leaving the parent
  }

  function handleDropdownClick(dropdownName: string) {
    setNestedDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  }

  React.useEffect(() => {
    if (typeof window !== "undefined"){
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth); 
      window.addEventListener(
      "resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  if (typeof window !== "undefined"){
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
          className="flex items-center"
        >
          <span className="text-4xl mr-2" style={{ color: "#00FF99" }}>
            m
          </span>{" "}
          morlabs
        </Typography>

        {/* Desktop Navbar */}
        {windowWidth !== null && windowWidth >= 960 && (
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {/* For Developers Dropdown */}
          {/* <li
            className="relative"
            onMouseOver={() => handleMouseOver("dev")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium" style={{ color: isScrolling ? "gray" : "white" }}>
              For Developers
            </button> */}
        
        <li
              className="relative"
              onMouseOver={() => handleMouseOver("developers")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium flex items-center"
                style={{ color: isScrolling ? "gray" : "white" }}
              >
                For Developers
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {activeDropdown === "developers" && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {/* API Section */}
                  <div className="p-4 space-y-2">
                    <h4 className="font-semibold text-sm">APIs</h4>
                    {navItems.APIs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                  {/* Chains Section */}
                  <div className="p-4 space-y-2">
                    <h4 className="font-semibold text-sm">Chains</h4>
                    {navItems.BlockChains.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                </div>
              )}
            </li>

          



            {/* {activeDropdown === "dev" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <NavItem href="#">All APIs</NavItem>
                <li className="relative">
                  <button
                    className="font-medium"
                    onClick={() => handleDropdownClick("blockchain")}
                  >
                    Blockchain
                  </button>
                  {nestedDropdown === "blockchain" && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                      <NavItem href="#">Solana</NavItem>
                      <NavItem href="#">Ethereum</NavItem>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="font-medium"
                    onClick={() => handleDropdownClick("industry")}
                  >
                    Industry
                  </button>
                  {nestedDropdown === "industry" && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                      <NavItem href="#">DeFi</NavItem>
                      <NavItem href="#">Gaming</NavItem>
                      <NavItem href="#">Payments</NavItem>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="font-medium"
                    onClick={() => handleDropdownClick("featured")}
                  >
                    Featured APIs
                  </button>
                  {nestedDropdown === "featured" && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                      <NavItem href="#">Upvote API</NavItem>
                      <NavItem href="#">Downvote API</NavItem>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li> */}

          {/* Publish Your API Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("publish")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium flex items-center"
                style={{ color: isScrolling ? "gray" : "white" }}
              >
                Publish Your API
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {activeDropdown === "publish" && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {/* Publish Section */}
                  <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm">
                      Add
                    </h4>
                    {navItems.publish.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                  
                </div>
              )}
            </li>
                      
          {/* <li
            className="relative"
            onMouseOver={() => handleMouseOver("publish")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium" style={{ color: isScrolling ? "gray" : "white" }}>
              Publish Your API
            </button>
            {activeDropdown === "publish" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <NavItem href="#">Submit API</NavItem>
                <NavItem href="#">API Guidelines</NavItem>
              </ul>
            )}
          </li> */}

          {/* Community Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("community")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium flex items-center"
                style={{ color: isScrolling ? "gray" : "white" }}
              >
                Community
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {activeDropdown === "community" && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {/* community Section */}
                  <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm">
                      Forum
                    </h4>
                    {navItems.publish.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                  
                </div>
              )}
            </li>

          {/* <li
            className="relative"
            onMouseOver={() => handleMouseOver("community")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium" style={{ color: isScrolling ? "gray" : "white" }}>
              Community
            </button>
            {activeDropdown === "community" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <NavItem href="#">DAO Voting</NavItem>
                <NavItem href="#">Discussion Forum</NavItem>
                <NavItem href="#">Contribute</NavItem>
              </ul>
            )}
          </li> */}

          {/* Company Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium flex items-center"
                style={{ color: isScrolling ? "gray" : "white" }}
              >
                Company
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {/* company Section */}
                  <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm">
                      Morlabs
                    </h4>
                    {navItems.morlabs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                  
                </div>
              )}
            </li>

          {/* <li
            className="relative"
            onMouseOver={() => handleMouseOver("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium" style={{ color: isScrolling ? "gray" : "white" }}>
              Company
            </button>
            {activeDropdown === "company" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <NavItem href="#">Our Mission</NavItem>
                <NavItem href="#">Roadmap</NavItem>
                <NavItem href="#">Team</NavItem>
                <NavItem href="#">Blog</NavItem>
              </ul>
            )}
          </li> */}

          {/* Docs Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("docs")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="font-medium flex items-center"
                style={{ color: isScrolling ? "gray" : "white" }}
              >
                Docs
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              {activeDropdown === "docs" && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  {/* Docs Section */}
                  <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm">
                      Guides
                    </h4>
                    {navItems.docs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div>
                  
                </div>
              )}
            </li>

          {/* <li
            className="relative"
            onMouseOver={() => handleMouseOver("docs")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium" style={{ color: isScrolling ? "gray" : "white" }}>
              Docs
            </button>
            {activeDropdown === "docs" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                <NavItem href="#">Developer Docs</NavItem>
                <NavItem href="#">API Doc Templates</NavItem>
                <NavItem href="#">Solana Integration</NavItem>
                <NavItem href="#">Sandbox/Test Environment</NavItem>
              </ul>
              
            )}
          </li> */}
        </ul>
      )}
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="#" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Connect Wallet
            </Button>
          </a>
        </div>
        <div 
        className="flex items-center lg:hidden">

          {/* mobile Toggle */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpenMenu}
          className="ml-auto inline-block lg:hidden"
          size = "sm"
        >
          {openMobileMenu ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
        </div>
      </div>
      {windowWidth !== null && windowWidth< 960 && (
      <Collapse open={openMobileMenu}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            {/* For Developers Dropdown */}
            <li
              className="relative"
              onMouseOver={() => handleMouseOver("dev")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-medium">
                For Developers
              </button>
              {activeDropdown === "dev" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  <NavItem href="#">All APIs</NavItem>
                  <li className="relative">
                    <button
                      className="font-medium"
                      onClick={() => handleDropdownClick("blockchain")}
                    >
                      Blockchain
                    </button>
                    {nestedDropdown === "blockchain" && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                        <NavItem href="#">Solana</NavItem>
                        <NavItem href="#">Ethereum</NavItem>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <button
                      className="font-medium"
                      onClick={() => handleDropdownClick("industry")}
                    >
                      Industry
                    </button>
                    {nestedDropdown === "industry" && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                        <NavItem href="#">DeFi</NavItem>
                        <NavItem href="#">Gaming</NavItem>
                        <NavItem href="#">Payments</NavItem>
                      </ul>
                    )}
                  </li>
                  <li className="relative">
                    <button
                      className="font-medium"
                      onClick={() => handleDropdownClick("featured")}
                    >
                      Featured APIs
                    </button>
                    {nestedDropdown === "featured" && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                        <NavItem href="#">Upvote API</NavItem>
                        <NavItem href="#">Downvote API</NavItem>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* Publish Your API Dropdown */}
            <li
              className="relative"
              onMouseOver={() => handleMouseOver("publish")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-medium">
                Publish Your API
              </button>
              {activeDropdown === "publish" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  <NavItem href="#">Submit API</NavItem>
                  <NavItem href="#">API Guidelines</NavItem>
                </ul>
              )}
            </li>

            {/* Community Dropdown */}
            <li
              className="relative"
              onMouseOver={() => handleMouseOver("community")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-medium">
                Community
              </button>
              {activeDropdown === "community" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  <NavItem href="#">DAO Voting</NavItem>
                  <NavItem href="#">Discussion Forum</NavItem>
                  <NavItem href="#">Contribute</NavItem>
                </ul>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              className="relative"
              onMouseOver={() => handleMouseOver("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-medium">
                Company
              </button>
              {activeDropdown === "company" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  <NavItem href="#">Our Mission</NavItem>
                  <NavItem href="#">Roadmap</NavItem>
                  <NavItem href="#">Team</NavItem>
                  <NavItem href="#">Blog</NavItem>
                </ul>
              )}
            </li>

            {/* Docs Dropdown */}
            <li
              className="relative"
              onMouseOver={() => handleMouseOver("docs")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="font-medium">
                Docs
              </button>
              {activeDropdown === "docs" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                  <NavItem href="#">Developer Docs</NavItem>
                  <NavItem href="#">API Doc Templates</NavItem>
                  <NavItem href="#">Solana Integration</NavItem>
                  <NavItem href="#">Sandbox/Test Environment</NavItem>
                </ul>
              )}
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="#" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
                Connect Wallet
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
      )}
    </MTNavbar>
  );
}

export default Navbar;
