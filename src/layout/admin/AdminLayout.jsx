import React from "react";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import AdminHeader from "../../components/admin/header/Header";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <AdminHeader />
        <div className="px-20 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
