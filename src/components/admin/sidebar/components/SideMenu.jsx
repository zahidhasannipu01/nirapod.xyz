import React, { useState } from "react";
import sidebarMenu from "../../../../router/admin/menuItem/sidebarMenu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const SideMenu = ({ IsCollapsed }) => {
  // State to track which menu item is expanded
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Function to handle menu item click
  const handleMenuClick = (menuId) => {
    setExpandedMenu((prev) => (prev === menuId ? null : menuId));
  };

  return (
    <div>
      {sidebarMenu.map((items) => (
        <div key={items.id} className="mb-8">
          <div
            className={`text-md font-medium py-1 ${IsCollapsed && "hidden"}`}
          >
            {items.header}
          </div>

          <div
            className={`bg-slate-400/0 duration-300 flex justify-between items-center hover:bg-slate-400/20 ${
              IsCollapsed ? "px-1 py-1" : "px-4 py-2"
            } rounded-lg cursor-pointer`}
            onClick={() => handleMenuClick(items.id)}
          >
            <Link to={items.submenu ? "#" : items.url}>
              <div className={`flex gap-2`}>
                {IsCollapsed ? (
                  <Tooltip title={items.name} placement="right-start">
                    <span>{items.icon}</span>
                  </Tooltip>
                ) : (
                  items.icon
                )}

                <p className={` ${IsCollapsed && "hidden"}`}>{items.name}</p>
              </div>
            </Link>
            {items.submenu && (
              <div>
                {IsCollapsed === false && (
                  <>
                    {expandedMenu === items.id ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {IsCollapsed === false && (
            <>
              {items.submenu &&
                items.submenu.length > 0 &&
                expandedMenu === items.id && (
                  <div className="duration-300 bg-blue-200/50 rounded-lg py-2 mt-3">
                    {items.submenu.map((subItem) => (
                      <div key={subItem.id} className="py-1 px-2 rounded-lg">
                        <Link to={subItem.url}>
                          <div className="bg-slate-400/0 duration-300 hover:bg-slate-400/20 px-4 py-2 rounded-lg">
                            {subItem.name}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
