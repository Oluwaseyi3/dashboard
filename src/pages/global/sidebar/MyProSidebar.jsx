import React from 'react'

import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedI from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlined from "@mui/icons-material/PieChartOutlineOutlined";

import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import SwitchRightOutlined from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlined from "@mui/icons-material/SwitchLeftOutlined";

const MyProSidebar = () => {
  return (
    <div>MyProSidebar</div>
  )
}

export default MyProSidebar