"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Fast SDK Integration",
    children:
      "Accelerate your development with ready-to-use SDK and pre-built modules for common Web3 functionalities.",
  },
  {
    icon: HeartIcon,
    title: "Comprehensive API Directory",
    children:
      "Explore a wide range of APIs, organized by domain, for seamless integration into your web3 projects.",
  },
  {
    icon: LockClosedIcon,
    title: "AI-Powered Search",
    children:
      "Leverage AI to quickly find the APIs you need, with personalized recommendations based on your project requirements.",
  },
  {
    icon: LightBulbIcon,
    title: "Testing Environment",
    children:
      "Test your APIs in a dedicated sandbox environment before going live.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4 dark:bg-gray-900 dark:text-gray-300"> {/* Adjusted for dark mode */}
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase dark:text-gray-400"
        >
          Your Developer Dashboard
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 dark:text-white"
        >
          Manage Your APIs, SDKs, and Projects in One Place
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 dark:!text-gray-300 lg:w-11/12 lg:px-8"
        >
          Quick access to your most frequently used APIs and SDKs. Easily find
          APIs based on your project's needs. View all your Web3 projects, track
          progress, and access your integrations.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Features;
