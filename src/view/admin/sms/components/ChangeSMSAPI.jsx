import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../../axiosInstance";
import { Bounce, toast } from "react-toastify";

const ChangeSMSAPI = () => {
  const [FormData, setFormData] = useState({
    id: 1,
    api_key: "",
    sender_id: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleViewData = () => {
    AxiosInstance.get("/sms/get-api")
      .then((res) => {
        setFormData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleViewData();
  }, []);

  const handleSubmit = () => {
    AxiosInstance.put(`/sms/update-api/${FormData.id}`, FormData)
      .then((res) => {
        if (res.status === 200) {
          toast.success("SMS API has been added", {
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
        } else {
        }
      })
      .catch((err) => {
        toast.error("SMS API can not be updated", {
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
      });
  };
  return (
    <div className="border px-4 py-3 rounded-2xl">
      <div className="mb-3">
        <p className="text-lg font-medium leading-5">SMS API</p>
        <small>Please enter SMS API details to enable SMS service.</small>
      </div>
      <div className="flex flex-col gap-y-4 mt-10">
        <input
          id="api_key"
          onChange={handleChange}
          value={FormData.api_key}
          type="text"
          placeholder="Enter API Key"
          className="border w-full px-4 py-1 rounded-2xl focus:outline-none"
        />
        <input
          id="sender_id"
          onChange={handleChange}
          value={FormData.sender_id}
          type="text"
          placeholder="Enter Send ID"
          className="border w-full px-4 py-1 rounded-2xl focus:outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-3 mt-[3.5rem]">
        <button
          onClick={handleSubmit}
          className="text-white text-xs bg-gradient-to-r from-[#ffbc3d] to-[#ff7c00] bg-[#06b6d4] px-4 py-2 rounded-2xl"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ChangeSMSAPI;
