import { configureStore } from "@reduxjs/toolkit";
import websiteReducer from "../admin/websiteSlice/websiteSlice";

export const store = configureStore({
  reducer: {
    website: websiteReducer,
  },
});
