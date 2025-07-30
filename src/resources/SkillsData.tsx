import { BiCodeCurly, BiLogoVisualStudio } from "react-icons/bi";
import { BsTerminalFill } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGit,
  FaShopify,
} from "react-icons/fa";
import {
  FaBook,
  FaCircleQuestion,
  FaClock,
  FaMessage,
  FaStar,
  FaUserGroup,
  FaUserTie,
} from "react-icons/fa6";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { PiPlantFill } from "react-icons/pi";
import { RiRobot3Fill } from "react-icons/ri";
import {
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiJest,
  SiNvm,
  SiStrapi,
  SiRazorpay,
  SiLinux,
  SiUbuntu,
  SiPostman,
  SiAdobecreativecloud,
  SiMui,
  SiIntellijidea,
  SiOpenai,
  SiVercel,
  SiClaude,
  SiHuggingface,
  SiGooglegemini,
  SiLeetcode,
  SiNotion,
  SiGithubcopilot,
} from "react-icons/si";

export const SkillsData = [
  {
    title1: "Coding & Markup",
    title2: "Languages",
    skills: [
      {
        title: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: <FaHtml5 />,
        color: "#E34F26",
      },
      {
        title: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: <FaCss3Alt />,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: <FaJs />,
        color: "#FCC624",
      },
      {
        title: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: <SiTypescript />,
        color: "#3178C6",
      },
    ],
  },
  {
    title1: "Frontend",
    title2: "Skills",
    skills: [
      {
        title: "Vite",
        link: "https://vitejs.dev/",
        icon: <SiVite />,
        color: "#646CFF",
      },
      {
        title: "NextJS 13/14",
        link: "https://nextjs.org/",
        icon: <SiNextdotjs />,
        color: "darker",
      },

      {
        title: "Redux",
        link: "https://redux.js.org/",
        icon: <SiRedux />,
        color: "#764ABC",
      },
      {
        title: "Tailwind",
        link: "https://tailwindcss.com/",
        icon: <SiTailwindcss />,
        color: "#38BDF8",
      },
      {
        title: "Chakra UI",
        link: "https://chakra-ui.com/",
        icon: <SiChakraui />,
        color: "#319795",
      },
      {
        title: "Framer Motion",
        link: "https://www.framer.com/motion/",
        icon: <SiFramer />,
        color: "#0055FF",
      },
    ],
  },
  {
    title1: "Backend",
    title2: "Skills",
    skills: [
      {
        title: "Node",
        link: "https://nodejs.org/",
        icon: <FaNodeJs />,
        color: "#339933",
      },
      {
        title: "Express",
        link: "https://expressjs.com/",
        icon: <SiExpress />,
        color: "darker",
      },
      {
        title: "MongoDB",
        link: "https://www.mongodb.com/",
        icon: <SiMongodb />,
        color: "#47A248",
      },
      {
        title: "Firebase",
        link: "https://firebase.google.com/",
        icon: <SiFirebase />,
        color: "#FFCA28",
      },
      {
        title: "WebSockets",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        icon: <FaJs />,
        color: "#FCC624",
      },
      {
        title: "Sequelize",
        link: "https://sequelize.org/",
        icon: <SiSequelize />,
        color: "#52B0E7",
      },
    ],
  },
  {
    title1: "DevOps",
    title2: "Skills",
    skills: [
      {
        title: "AWS Essentials",
        link: "https://aws.amazon.com/",
        icon: <FaAws />,
        color: "#FF9900",
      },
      {
        title: "Vercel",
        link: "https://vercel.com/home",
        icon: <SiVercel />,
        color: "darker",
      },

      {
        title: "Git",
        link: "https://git-scm.com/",
        icon: <FaGit />,
        color: "#F05032",
      },
      {
        title: "NVM",
        link: "https://github.com/nvm-sh/nvm",
        icon: <SiNvm />,
        color: "#3E863D",
      },
    ],
  },
  {
    title1: "CMS & Other",
    title2: "Tools",
    skills: [
      {
        title: "Ubuntu",
        link: "https://ubuntu.com/",
        icon: <SiUbuntu />,
        color: "#E95420",
      },
      {
        title: "CLI",
        link: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
        icon: <BsTerminalFill />,
        color: "darker",
      },
      {
        title: "IntelliJ IDEA",
        link: "https://www.jetbrains.com/idea/",
        icon: <SiIntellijidea />,
        color: "#b83aca",
      },
      {
        title: "VS Code",
        link: "https://code.visualstudio.com/",
        icon: <BiLogoVisualStudio />,
        color: "#007ACC",
      },
      {
        title: "Postman",
        link: "https://www.postman.com/",
        icon: <SiPostman />,
        color: "#FF6C37",
      },
    ],
  },
  {
    title1: "AI",
    title2: "Tools",
    skills: [
      {
        title: "ChatGPT",
        link: "https://chatgpt.com/",
        icon: <SiOpenai />,
        color: "darker",
      },
      {
        title: "Cursor AI",
        link: "https://cursor.com/",
        icon: <HiCursorArrowRipple />,
        color: "#914088ff",
      },
    ],
  },
  {
    title1: "Soft",
    title2: "Skills",
    skills: [
      {
        title: "Teamwork",
        link: "#",
        icon: <FaUserGroup />,
        color: "darker",
      },
      {
        title: "Leadership",
        link: "#",
        icon: <FaStar />,
        color: "darker",
      },
      {
        title: "Problem Solving",
        link: "#",
        icon: <FaCircleQuestion />,
        color: "darker",
      },
      {
        title: "Time Management",
        link: "#",
        icon: <FaClock />,
        color: "darker",
      },
      {
        title: "Adaptability",
        link: "#",
        icon: <FaBook />,
        color: "darker",
      },
      {
        title: "Communication",
        link: "#",
        icon: <FaMessage />,
        color: "darker",
      },
    ],
  },
];
