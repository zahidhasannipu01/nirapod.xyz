import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Index";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
