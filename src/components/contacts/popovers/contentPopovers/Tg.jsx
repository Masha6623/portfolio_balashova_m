import { Tag } from "antd";

const Tg = ({ setOpenLink, copyLink }) => {
  return (
    <div>
      <Tag color="red">
        <a onClick={() => setOpenLink(false)}>Close</a>
      </Tag>
      <Tag color="orange">
        <a onClick={copyLink}>Copy link</a>
      </Tag>
      <Tag color="green">
        <a
          onClick={() => setOpenLink(false)}
          target="blank"
          href="https://t.me/ma_rixz"
        >
          Go to link
        </a>
      </Tag>
    </div>
  );
};

export default Tg;
