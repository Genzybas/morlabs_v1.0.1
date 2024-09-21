import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-start">
        <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-white dark:bg-darkBackground">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-darkText">
          {title}
        </Typography>
        <Typography className="font-normal !text-gray-500 dark:text-gray-300">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
