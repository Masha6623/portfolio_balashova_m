import { Button, Popover } from "antd";
import Phone from "./contentPopovers/Phone";

const PhoneNumber = ({ openPhone, setOpenPhone, copyPhone }) => {
  return (
    <div>
      <Popover
        content={<Phone setOpenPhone={setOpenPhone} copyPhone={copyPhone}/>}
        title="Action selection"
        trigger="click"
        placement="bottom"
        open={openPhone}
        onOpenChange={() => setOpenPhone(true)}
      >
        <Button type="primary" size="large">
          Phone number: +7(999)-145-70-96
        </Button>
      </Popover>
    </div>
  );
};

export default PhoneNumber;
