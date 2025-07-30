import { Text } from "@chakra-ui/react";

const DescAboutPage = () => {
  return (
    <Text
      color={"text"}
      letterSpacing={"1.5px"}
      fontWeight={"400"}
      fontFamily={"Poppins"}
      whiteSpace={"pre-wrap"}
      textAlign={"justify"}
      fontSize={{ base: "12px", xl: "14px" }}
    >
      My name is Shrutika Gadekar, and I’m a dedicated full-stack developer with
      a strong foundation in building responsive, user-friendly web
      applications. On the frontend, I work with HTML, CSS, JavaScript,
      React.js, Redux, and Tailwind CSS to craft clean, intuitive user
      interfaces. On the backend, I’m skilled in Node.js, Express.js, and
      MongoDB, developing scalable APIs and managing data efficiently to power
      robust, end-to-end web solutions. I’m passionate about turning ideas into
      functional, visually appealing products, with a focus on clean code,
      smooth user experiences, and continuous learning. My goal is to contribute
      meaningfully to impactful projects and grow as a developer in a
      collaborative, tech-driven environment.
    </Text>
  );
};

export default DescAboutPage;
