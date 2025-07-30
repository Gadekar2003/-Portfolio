import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdCall, MdMyLocation } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import autotronLogoIcon from "@/assets/icons/autotronIcon.png";
import masaiLogoImg from "@/assets/icons/masai.ico";
import topbarLogo from "@/assets/icons/topbarIcon.png";
import ve3Logo from "@/assets/icons/ve3Icon.jpg";

export const SocialButtonsData = [
  {
    link: "https://github.com/Gadekar2003",
    icon: VscGithub,
    tooltip: "GitHub",
    label: "Visit my GitHub profile!",
  },
  {
    link: "mailto:gadekarshrutika98@gmail.com",
    icon: MdAlternateEmail,
    tooltip: "Email",
    label: "Contact me via Email!",
  },
  {
    link: "tel:+919545486214",
    icon: MdCall,
    tooltip: "Phone",
    label: "Contact me via a call!",
  },
  {
    link: "https://www.linkedin.com/in/shrutika-gadekar/",
    icon: FaLinkedinIn,
    tooltip: "LinkedIn",
    label: "View my LinkedIn profile",
  },
];

export const Links = {
  githubLink: "https://github.com/Gadekar2003",

  mailLink: "mailto:gadekarshrutika98@gmail.com",

  mailLinkTemplate:
    "mailto:gadekarshrutika98@gmail.com?subject=Subject%20Related%20to%20shortlist%20or%20Job%20Role%20Offer&body=Brief%20Declaration%0A%0ARequirements%20for%20Job%20role%0A%0ASome%20information%20about%20Interview%20Process%0A%0AIf%20Applicable%0ASalary%20Range%0A%20#LPA%20to%20#LPA%0AAny%20CTC%20Related%20Details%0A%0AJob%20Description%0AMy%20Role%20in%20the%20Respected%20Company%0A%0AYour%20Signature%20%0A%0AAny%20Task%20or%20Asignment?",

  MasaiLogo: masaiLogoImg.src,
  MasaiWebsite: "https://www.masaischool.com/",
  MasaiLinkedIn: "https://www.linkedin.com/school/masai-school/",
  UOPLogo:
    "https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png",
  UOPWebsite: "http://www.unipune.ac.in/",
  UOPLinkedIn: "",

  phoneLink: "tel:+919545486214",

  linkedInLink: "https://www.linkedin.com/in/shrutika-gadekar/",

  resumelink:
    "https://drive.google.com/file/d/1I-8BtPj-BkjcEYMPM13GAFIneORzhcFq/view?usp=sharing",

  resumeDownload:
    "https://drive.google.com/uc?export=download&id=1I-8BtPj-BkjcEYMPM13GAFIneORzhcFq",
};

export const ThemeIconsData = [
  {
    color: "themeBlue",
    metaColor: "#0954BD",
    themeName: "blue",
  },
  {
    color: "themeRed",
    metaColor: "#E10202",
    themeName: "red",
  },
  {
    color: "themeGreen",
    metaColor: "#11C402",
    themeName: "green",
  },
  {
    color: "themeViolet",
    metaColor: "#8406C3",
    themeName: "violet",
  },
  {
    color: "themeOrange",
    metaColor: "#C44201",
    themeName: "orange",
  },
  {
    color: "themeYellow",
    metaColor: "#DBBA03",
    themeName: "yellow",
  },
];
