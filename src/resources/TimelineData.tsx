import { MdWork } from "react-icons/md";
import { TimelineCardProps } from "./TYPES";
import { RiGraduationCapFill } from "react-icons/ri";
import { Links } from "./CONSTANTS";

const {
  MasaiLinkedIn,

  MasaiLogo,
  MasaiWebsite,

  UOPLinkedIn,
  UOPLogo,
  UOPWebsite,
} = Links;

export const VE3Query = [
  "NextJs",
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "ShadCN UI",
  "Scss",
  "NodeJS",
  "Express",
  "SQL",
  "NoSQL",
  "Prisma",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Python",
  "Pandas",
  "AI Models",
];

export const TopBarQuery = [
  "NextJs",
  "React",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "Scss",
  "ChakraUI",
  "NodeJS",
  "Express",
  "SQL",
  "NoSQL",
  "Prisma",
  "AWS EC2",
  "AWS S3",
  "Docker",
  "Shopify",
  "Strapi",
  "Razorpay",
];
export const AutotronQuery = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "Chakra UI",
  "JavaScript",
  "Node",
  "Express",
  "MongoDB",
];
export const MasaiQuery = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "NextJS",
  "TypeScript",
  "Node",
  "Express",
  "MongoDB",
  "Frontend",
  "Backend",
];
export const UOPQuery = [
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Java",
  "DBMS",
  "ComputerNetworking",
];

export const TimelineData: TimelineCardProps[] = [
  {
    type: "Education",
    title: "Masai School",
    logo: MasaiLogo,
    linkedin: MasaiLinkedIn,
    website: MasaiWebsite,
    role: "Learning Full Stack Web Developement",
    query: MasaiQuery,
    highlight: MasaiQuery.join(" "),
    dateStart: "Dec 2024",
    dateEnd: "Aug 2025",
    icon: <RiGraduationCapFill />,
  },

  {
    type: "Education",
    title: "University of Pune",
    logo: UOPLogo,
    linkedin: UOPLinkedIn,
    website: UOPWebsite,
    role: "Graduation: Bachelor Of Computer Engineering",
    query: UOPQuery,
    highlight: UOPQuery.join(" "),
    dateStart: "Jul 2021",
    dateEnd: "Jun 2024",
    icon: <RiGraduationCapFill />,
  },
];
