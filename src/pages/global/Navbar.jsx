import React from 'react'
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import Search from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";


const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { toggleSidebar, broken, rtl } = useProSidebar();
    
    console.log(rtl);
  return (
    <div>
         <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlined />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <Search />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            
           <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlined />
          </IconButton>
        )}
      </Box>
    </Box>
    </div>
  )
}

export default Navbar