import AdminLayout from "../../context/admin/AdminLayout";
import Dashboard from "../../view/admin/dashboard/Dashboard";

const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
};

export default AdminRoutes;
