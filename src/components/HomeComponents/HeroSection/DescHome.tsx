import { Text } from "@chakra-ui/react";

const DescHome = () => {
  return (
    <Text
      color={"text"}
      fontWeight={400}
      fontFamily={"Poppins"}
      textAlign={"justify"}
      fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
      m={{ base: 4, md: 8 }}
      letterSpacing={"1.5px"}
    >
      Full Stack Developer Passionate full-stack developer with a strong
      foundation in both frontend and backend technologies. Skilled in building
      responsive user interfaces using HTML, CSS, JavaScript, React.js, Redux,
      and Tailwind CSS. Currently expanding my backend development skills with
      Node.js, Express.js, and MongoDB to build full-stack applications.
    </Text>
  );
};

export default DescHome;
