import weatherImg from "@/assets/projects/weatherDashboard.webp";
import educationalAppImg from "@/assets/projects/educationalGamification.png";
import financeTrackerImg from "@/assets/projects/financeTracker.png";

import { Links } from "./CONSTANTS";
import { ProjectDataProps, ProjectStatus } from "./TYPES";

const {} = Links;

export const PersonalProjectsData: ProjectDataProps[] = [
  {
    live: "https://polite-squirrel-87deeb.netlify.app/",
    github:
      "https://github.com/Gadekar2003/WeatherDashboard?tab=readme-ov-file",
    image: weatherImg.src,
    heading1: "Weather",
    heading2: "Dashboard",
    status: ProjectStatus.Completed,
    workType: "Individual",
    summary:
      "A simple Weather Dashboard app that allows users to check the current weather and 5-day forecast of any city using OpenWeather API.",
    TStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    live: "https://coruscating-brioche-9de594.netlify.app/",
    github: "https://github.com/Gadekar2003/Education-Game",
    image: educationalAppImg.src,
    heading1: "Educational",
    heading2: "Gamification App",
    status: ProjectStatus.Completed,
    workType: "Individual",
    summary:
      "An educational quiz app where users can solve questions, track scores, and receive instant feedback. Built with Firebase for real-time data storage.",
    TStack: ["HTML", "CSS", "JavaScript", "Firebase"],
  },

  {
    live: "https://finance-tracker-r31hdwepm-gadekar2003s-projects.vercel.app/",
    github: "https://github.com/Gadekar2003/Finance-Tracker",
    image: financeTrackerImg.src,
    heading1: "Finance",
    heading2: "Tracker",
    status: ProjectStatus.Completed,
    workType: "Individual",
    summary:
      "A personal finance management application that allows users to track income and expenses, and visualize data with analytics charts using MongoDB and Next.js.",
    TStack: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],
  },
];
