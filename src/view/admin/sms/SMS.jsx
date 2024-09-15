import React from "react";
import SMSuse from "./components/use/SMSuse";
import ChangeSMSAPI from "./components/ChangeSMSAPI";
import SendSMS from "./components/use/SendSMS";

const SMS = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 px-4 py-4">
        <SMSuse />
        <ChangeSMSAPI />
        <SendSMS />
      </div>
    </div>
  );
};

export default SMS;
