import { Flex, Typography } from "antd";

const baseStyle = {
  backgroundColor: "#097c768e",
  width: "100%",
  padding: "40px 0",
  height: "95vh",
  justifyContent: "center",
  alignItems: "center",
};

const Information = () => {
  return (
    <Flex
      id="aboutMe"
      vertical
      style={{
        ...baseStyle,
      }}
    >
      <div style={{ padding: "0 15px", maxWidth: "660px" }}>
        <Typography.Title style={{ margin: 0, fontSize: 60 }}>
          Hi,{" "}
          <em style={{ color: "white", fontStyle: "normal" }}>my name is</em>{" "}
          Mariya
        </Typography.Title>

        <Typography.Title style={{ color: "white", margin: 0, fontSize: 35 }}>
          I am frontend(React) developer
        </Typography.Title>

        <Typography.Title style={{ margin: "15px 0 0 0", fontSize: 45 }}>
          Skills:
        </Typography.Title>

        <Typography.Title
          style={{ color: "white", margin: "10px 0px", fontSize: 17 }}
        >
          JavaScript, ReactJS, HTML, CSS, Webpack, Bootstrap, MaterialUI, Ant
          Design
        </Typography.Title>
      </div>
    </Flex>
  );
};

export default Information;
