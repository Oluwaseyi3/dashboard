// import React, {useState, useEffect, useRef} from 'react'
// import { Typography, Box, useTheme } from "@mui/material";
// import { tokens } from "../../theme"
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Fade from '@mui/material/Fade';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Stack from '@mui/material/Stack';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));

// const ServiceBox = ({id, accountStat}) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [accountNo, setAccountNo]= React.useState(0)
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
  
//   };
//   const handleClose = (event) => {
//     console.log(event.target.value);
//     setAccountNo(event.target.value)
//     setAnchorEl(null);
//   };

//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);

//     const [statId, setStatId] = useState(id)
//     const [accountStat, setAccountStats] = useState(null)
    
   
//     const ACCOUNT_STATS_API=`https://hiring.tailwarden.com/v1/accounts/${statId}`
 
//     const accountRef = useRef(null)
//     useEffect(() => {
//         const fetchStats  = async() => {
//             try {
//               if (accountRef.current) {
//                 setAccountStats(accountRef.current)
             
//               }
//               const response = await axios.get(ACCOUNT_STATS_API)
//                 const data = response.data;
//                 accountRef.current = data;
//                 setAccountStats(data)
                
//             } catch (error) {
//               console.error(error);
             
//             }
//           }
//           fetchStats()
//     }, [])

   
    
//   return (
//     <div>
//         <Stack direction="row" spacing={2}>
//     <ColorButton
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//         variant="contained"
//         endIcon={<ArrowDropDownIcon />}
//       >
//          <Typography variant="h6" color="white" fontWeight="bold">  Dashboard</Typography>
      
//       </ColorButton>
//       </Stack>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           'aria-labelledby': 'fade-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         <MenuItem onClick={handleClose} value={0}>Profile</MenuItem>
//         <MenuItem onClick={handleClose} value={1}>My account</MenuItem>
//         <MenuItem onClick={handleClose} value={2}>Logout</MenuItem>
//       </Menu>
//     </div>
//   )
// }

// export default ServiceBox