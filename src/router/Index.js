import { createBrowserRouter } from "react-router-dom";
import FrontendRouter from "./frontend/FrontendRouter";
import AdminRoutes from "./admin/adminRoutes";

const Router = createBrowserRouter([FrontendRouter, AdminRoutes]);

export default Router;
