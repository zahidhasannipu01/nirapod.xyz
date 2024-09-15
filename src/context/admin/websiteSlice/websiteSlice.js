import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  site_title: "",
  site_tagline: "",
  logo: "",
  address: "",
  phone_number: "",
  alternative_phone_number: "",
  email: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  copyright_text: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  logoUrl: "",
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setWebsite: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setWebsite } = websiteSlice.actions;

export default websiteSlice.reducer;
