import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../../../axiosInstance";
import { Bounce, toast } from "react-toastify";

const SMSuse = () => {
  const [FormData, setFormData] = useState({
    "OTP verification": "",
    "User Order Confirmation": "",
    "User Payment Confirmation": "",
    "User Refund Confirmation": "",
  });

  const handleViewData = () => {
    AxiosInstance.get("/sms/get-sms-settings")
      .then((res) => {
        const data = res.data.data;
        // Create a copy of FormData to update
        const updatedFormData = { ...FormData };

        data.forEach((setting) => {
          if (updatedFormData.hasOwnProperty(setting.setting_name)) {
            updatedFormData[setting.setting_name] = setting.status;
          }
        });

        setFormData(updatedFormData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleViewData();
  }, []);

  const handleCheckboxChange = (settingName) => (event) => {
    // Determine the new status based on the checkbox's checked property
    const newStatus = event.target.checked ? 1 : 0;

    // Update the FormData state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [settingName]: newStatus,
    }));
  };
  const handleSubmit = () => {
    AxiosInstance.put("/sms/sms-settings/update-status", FormData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("SMS settings have been updated", {
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
        }
        handleViewData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="border px-4 py-3 rounded-2xl">
      <div className="mb-3">
        <p className="text-lg font-medium leading-5">SMS Settings</p>
        <small>Use these settings to enable SMS for its usages.</small>
      </div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={FormData["OTP verification"] === 1}
              onChange={handleCheckboxChange("OTP verification")}
            />
          }
          label="OTP verification"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={FormData["User Order Confirmation"] === 1}
              onChange={handleCheckboxChange("User Order Confirmation")}
            />
          }
          label="User Order Confirmation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={FormData["User Payment Confirmation"] === 1}
              onChange={handleCheckboxChange("User Payment Confirmation")}
            />
          }
          label="User Payment Confirmation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={FormData["User Refund Confirmation"] === 1}
              onChange={handleCheckboxChange("User Refund Confirmation")}
            />
          }
          label="User Refund Confirmation"
        />
      </FormGroup>
      <div className="flex justify-end items-center gap-3">
        <button
          onClick={handleSubmit}
          className="text-white text-xs bg-gradient-to-r from-[#ffbc3d] to-[#ff7c00] bg-[#06b6d4] px-4 py-2 rounded-2xl"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SMSuse;
