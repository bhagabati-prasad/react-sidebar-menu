import React from "react";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        {SidebarData.map((val, ind) => {
          return (
            <li
              key={ind}
              className='row'
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => (window.location.pathname = val.link)}
            >
              <div className='icon'>{val.icon}</div>
              <div className='title'>{val.title}</div>
            </li>

            // -------- can't have active id ----------
            // <NavLink
            //   key={ind}
            //   className='row'
            //   id={window.location.pathname === val.link ? "active" : ""}
            //   to={val.link}
            // >
            //   <div className='icon'>{val.icon}</div>
            //   <div className='title'>{val.title}</div>
            // </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
