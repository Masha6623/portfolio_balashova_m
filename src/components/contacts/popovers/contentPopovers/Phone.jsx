import { Tag } from "antd";

const Phone = ({setOpenPhone, copyPhone}) => {
  return (
    <div>
      <Tag color="red">
        <a onClick={() => setOpenPhone(false)}>Close</a>
      </Tag>
      <Tag color="orange">
        <a onClick={copyPhone}>Copy phone</a>
      </Tag>
      <Tag color="green">
        <a
          onClick={() => setOpenPhone(false)}
          target="blank"
          href="tel:+79991457096"
        >
          Call
        </a>
      </Tag>
    </div>
  );
};

export default Phone;
