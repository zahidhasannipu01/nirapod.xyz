import React, { useState } from "react";
import AxiosInstance from "../../../../../axiosInstance";
import { Bounce, toast } from "react-toastify";

const SendSMS = () => {
  const [FormData, setFormData] = useState({
    to: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  const handleSendSMS = () => {
    AxiosInstance.post("/sms/send", FormData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("SMS has been sent.", {
            position: "bottom-center",
            autoClose: 1200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setFormData({
            to: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setFormData({
      to: "",
      message: "",
    });
  };

  return (
    <div className="border px-4 py-3 rounded-2xl">
      <div className="mb-3">
        <p className="text-lg font-medium leading-5">Send SMS</p>
        <small>
          Enter mobile number(s) and message. Use commas to separate multiple
          numbers.
        </small>
      </div>
      <div className="flex flex-col gap-y-4 mt-10">
        <input
          id="to"
          onChange={handleChange}
          value={FormData.to}
          type="text"
          placeholder="Enter Mobile Number(s)"
          className="border w-full px-4 py-1 rounded-2xl focus:outline-none"
        />
        <textarea
          id="message"
          onChange={handleChange}
          value={FormData.message}
          type="text"
          placeholder="Type your message here"
          className="border w-full px-4 py-1 rounded-2xl focus:outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-3 mt-[3.5rem]">
        <button onClick={handleCancel} className=" text-xs  px-4 py-2 ">
          Cancel
        </button>
        <button
          onClick={handleSendSMS}
          className="text-white text-xs bg-gradient-to-r from-[#ffbc3d] to-[#ff7c00] bg-[#06b6d4] px-4 py-2 rounded-2xl"
        >
          Send SMS
        </button>
      </div>
    </div>
  );
};

export default SendSMS;
