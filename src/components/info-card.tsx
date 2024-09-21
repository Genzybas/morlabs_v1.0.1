import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid px-0">
        {/* Conditionally apply dark mode text color */}
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-2 text-gray-800 dark:text-white"
        >
          {title}
        </Typography>
        <Typography className="font-normal text-gray-500 dark:text-gray-300">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
