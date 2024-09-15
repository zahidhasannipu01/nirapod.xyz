import IcDashboard from "../../../assets/admin/icon/IcDashboard";
import IcSettings from "../../../assets/admin/icon/IcSettings";

const sidebarMenu = [
  {
    id: 1,
    header: "Dashboard",
    name: "Dashboard",
    url: "/admin/dashboard",
    icon: <IcDashboard />,
    permission_name: "view_dashboard",
  },
  {
    id: 2,
    header: "Website Settings",
    name: "Settings",
    url: "#",
    icon: <IcSettings />,
    permission_name: "view_settings",
    submenu: [
      {
        id: 3,
        name: "SMS Settings",
        url: "/admin/settings/sms",
        permission_name: "view_general_settings",
      },
      {
        id: 4,
        name: "Website Settings",
        url: "/admin/settings/website",
        permission_name: "view_user_settings",
      },
    ],
  },
  {
    id: 3,
    header: "Website Settings",
    name: "Settings",
    url: "#", // Placeholder if the main item doesn't have a direct link
    icon: "fa fa-cogs",
    permission_name: "view_settings",
    submenu: [
      {
        id: 3,
        name: "General Settings",
        url: "/admin/settings/general",
        permission_name: "view_general_settings",
      },
      {
        id: 4,
        name: "User Settings",
        url: "/admin/settings/users",
        permission_name: "view_user_settings",
      },
    ],
  },
  // Add more menu items and submenus as needed
];

export default sidebarMenu;
