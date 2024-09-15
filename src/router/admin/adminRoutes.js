import AdminLayout from "../../layout/admin/AdminLayout";
import Dashboard from "../../view/admin/dashboard/Dashboard";
import SMS from "../../view/admin/sms/SMS";
import Website from "../../view/admin/website/Website";

const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "accounts",
      element: <Dashboard />,
    },
    {
      path: "/admin/settings/sms",
      element: <SMS />,
    },
    {
      path: "/admin/settings/website",
      element: <Website />,
    },
  ],
};

export default AdminRoutes;
