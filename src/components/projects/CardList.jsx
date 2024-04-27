import { Carousel } from "antd";
import { projects } from "../../utils/projects";
import CardItem from "./CardItem";

const baseStyle = {
  backgroundColor: "#FFAE42",
  height: "100vh",
  width: "100%",
};

const CardList = () => {
  return (
    <Carousel style={{...baseStyle }} id="projects" autoplay>
      {projects.map((project) => (
        <CardItem key={project.id} project={project} />
      ))}
    </Carousel>
  );
};

export default CardList;
