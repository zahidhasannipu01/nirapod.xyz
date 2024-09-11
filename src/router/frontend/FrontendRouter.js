import FrontendLayout from "../../layout/frontend/Index";
import Home from "../../view/home/Index";

const FrontendRouter = {
  path: "/",
  element: <FrontendLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default FrontendRouter;
