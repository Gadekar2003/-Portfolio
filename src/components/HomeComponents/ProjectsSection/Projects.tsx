import { ClientOnly, Flex } from "@chakra-ui/react";
import MdHeading from "../Headings/MdHeading";
import GithubStats from "./GithubStats";
import CarouselComp from "../CarouselComp";
import SubHeading from "../Headings/SubHeading";
import PersonalProjectMapper from "./PersonalProjectMapper";
import ProjectsRefWrapper from "./ProjectsRefWrapper";

const Projects = () => {
  return (
    <ProjectsRefWrapper>
      <MdHeading title1="My" title2="Projects" />
      <Flex
        overflow={"hidden"}
        px={{ base: 0, md: 0, lg: 12 }}
        w={"100%"}
        direction={{ base: "column", md: "row" }}
        justify={"space-evenly"}
        align={"flex-start"}
        pos={"relative"}
      >
        {/* <Flex
          gap={6}
          w={"100%"}
          maxW={{ base: "100%", md: "360px", lg: "430px", xl: "500px" }}
          justify={"center"}
          align={"center"}
          direction={"column"}
          pos={"relative"}
        >
          <SubHeading title1="Live" title2="Projects" />
          <CarouselComp mapperFunction={LiveProjectsMapper} slides={1} />
        </Flex> */}
        <Flex
          gap={8}
          w={"100%"}
          maxW={{ base: "100%", md: "380px", lg: "430px", xl: "1440px" }}
          justify={"center"}
          align={"center"}
          direction={"column"}
          pos={"relative"}
        >
          <SubHeading title1="Live" title2="Projects" />
          <CarouselComp mapperFunction={PersonalProjectMapper} slides={3} />
        </Flex>
      </Flex>
      <MdHeading title1="Day's" title2="I Code" />
      <ClientOnly>
        <GithubStats />
      </ClientOnly>
    </ProjectsRefWrapper>
  );
};

export default Projects;
