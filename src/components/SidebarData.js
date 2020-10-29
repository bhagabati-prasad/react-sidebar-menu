import React from "react";
// icons
import HomeIcon from "@material-ui/icons/Home";
import ImageIcon from "@material-ui/icons/Image";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PeopleIcon from "@material-ui/icons/People";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Mailbox",
    icon: <MailIcon />,
    link: "/mailbox",
  },
  {
    title: "Analytics",
    icon: <AssessmentIcon />,
    link: "/analytics",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Friends",
    icon: <PeopleIcon />,
    link: "/friends",
  },
  {
    title: "Images",
    icon: <ImageIcon />,
    link: "/images",
  },
];
