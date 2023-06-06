import React from 'react'
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import {tokens} from "../../../../theme"
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlined from "@mui/icons-material/PieChartOutlineOutlined";

import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import SwitchRightOutlined from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlined from "@mui/icons-material/SwitchLeftOutlined";
import man from "../../../assets/man.jpg"

const Item = ({ title, to, icon, selected, setSelected }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <MenuItem
      routerLink={<Link to={to} />}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
   
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  return (
    <Box
    sx={{
      position: "sticky",
      display: "flex",
      height: "100vh",
      top: 0,
      bottom: 0,
      zIndex: 10000,
      "& .sidebar": {
        border: "none",
      },
      "& .menu-icon": {
        backgroundColor: "transparent !important",
      },
      "& .menu-item": {
        // padding: "5px 35px 5px 20px !important",
        backgroundColor: "transparent !important",
      },
      "& .menu-anchor": {
        color: "inherit !important",
        backgroundColor: "transparent !important",
      },
      "& .menu-item:hover": {
        color: `${colors.blueAccent[500]} !important`,
        backgroundColor: "transparent !important",
      },
      "& .menu-item.active": {
        color: `${colors.greenAccent[500]} !important`,
        backgroundColor: "transparent !important",
      },
    }}
  >
    <Sidebar
      breakPoint="md"
      rtl={sidebarRTL}
      backgroundColor={colors.primary[400]}
      image={sidebarImage}
    >
      <Menu iconshape="square">
        <MenuItem
          icon={
            collapsed &&
              <MenuOutlined onClick={() => collapseSidebar()} />
          
          }
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!collapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[200]}>
                Welcome
              </Typography>
              <IconButton
                onClick={
                  broken ? () => toggleSidebar() : () => collapseSidebar()
                }
              >
                <CloseOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {!collapsed && (
          <Box mb="25px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                "& .avater-image": {
                  backgroundColor: colors.primary[500],
                },
              }}
            >
              <img
                className="avater-image"
                alt="profile user"
                width="100px"
                height="100px"
                src={man}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[200]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Melinda Gates
              </Typography>
            </Box>
          </Box>
        )}
        <Box paddingLeft={collapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlined />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 20px 5px 20px" }}
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlined/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlined/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlined />}
            selected={selected}
            setSelected={setSelected}
          />

        </Box>
      </Menu>
    </Sidebar>
  </Box>
  )
}

export default MyProSidebar