import { Button, Popover } from "antd";
import Tg from "./contentPopovers/Tg";

const Telegram = ({ contentLink, openLink, setOpenLink, copyLink }) => {
  return (
    <div style={{ marginBottom: "8%", textAlign: "center" }}>
      <Popover
        content={<Tg copyLink={copyLink} setOpenLink={setOpenLink}/>}
        title="Action selection"
        trigger="click"
        open={openLink}
        onOpenChange={() => setOpenLink(true)}
      >
        <Button type="primary" size="large">
          Telegram: t.me/ma_rixz
        </Button>
      </Popover>
    </div>
  );
};

export default Telegram;
