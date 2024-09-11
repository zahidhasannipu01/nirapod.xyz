import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Index";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
