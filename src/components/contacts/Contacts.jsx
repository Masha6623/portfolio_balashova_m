import { Flex, message } from "antd";
import { useState } from "react";
import Telegram from "./popovers/Telegram";
import PhoneNumber from "./popovers/PhoneNumber";

const baseStyle = {
  backgroundColor: "#7B001C",
  width: "100%",
  padding: "40px 0",
  height: "95vh",
  justifyContent: "center",
  alignItems: "center",
};

const Contacts = () => {
  const [openLink, setOpenLink] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const option = { phone: "+79991457096", tgLink: "https://t.me/ma_rixz" };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully copied",
      style: {
        marginTop: "3vh",
      },
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(option.tgLink);
    success();
    setOpenLink(false);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(option.phone);
    success();
    setOpenPhone(false);
  };

  return (
    <Flex
      id="contacts"
      vertical
      style={{
        ...baseStyle,
      }}
    >
      {contextHolder}
      <div style={{ padding: "0 15px", maxWidth: "660px" }}>
        <Telegram
          copyLink={copyLink}
          openLink={openLink}
          setOpenLink={setOpenLink}
        />
        <PhoneNumber
          copyPhone={copyPhone}
          openPhone={openPhone}
          setOpenPhone={setOpenPhone}
        />
      </div>
    </Flex>
  );
};

export default Contacts;
