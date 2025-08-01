import Footer from "@/components/Footer/Footer";
import AboutCard from "@/components/HomeComponents/AboutSection/AboutCard";
import Contact from "@/components/HomeComponents/ContactSection/Contact";
import HeroSection from "@/components/HomeComponents/HeroSection/HeroSection";
import ToggleDarkMode from "@/components/HomeComponents/HeroSection/ToggleDarkMode";
import Projects from "@/components/HomeComponents/ProjectsSection/Projects";
import TechnicalSkills from "@/components/HomeComponents/TechnicalSkillsSection/TechnicalSkills";
import Timeline from "@/components/HomeComponents/TimelineSection.tsx/Timeline";
import Navbar from "@/components/Navbar/Navbar";
import { Box, ClientOnly } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shrutika Gadekar",
  description:
    "A Portfolio of Shrutika Gadekar, Made with NextJs and Chakra UI",
};

export default function Home() {
  return (
    <Box w={"100%"} pos={"relative"} bgColor={"white"}>
      <Navbar />
      <ClientOnly>
        <ToggleDarkMode />
      </ClientOnly>
      <HeroSection />
      <AboutCard />
      <Timeline />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </Box>
  );
}
