import { Anchor } from "antd";
import { anchors } from "../../utils/anchors";

const Navbar = () => {
  return (
    <Anchor
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      colorItem="white"
      direction="horizontal"
      items={anchors}
    />
  );
};

export default Navbar;
