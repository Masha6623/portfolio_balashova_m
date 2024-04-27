import { Button, Card, Image } from "antd";
import Meta from "antd/es/card/Meta";

const cardStyle = {
  width: "100%",
  height: "100%",
  marginTop: "10px",
};

const CardItem = ({ project }) => {
  const { img, title, link } = project;

  return (
    <div style={{ ...cardStyle }}>
      <Card
        hoverable
        style={{
          width: 340,
          margin: "24vh auto",
        }}
        cover={<Image alt={title} src={"./img/" + img} />}
      >
        <Meta
          title={title}
          description={
            <Button>
              <a target="blank" href={link}>
                Link to Github
              </a>
            </Button>
          }
        />
      </Card>
    </div>
  );
};

export default CardItem;
