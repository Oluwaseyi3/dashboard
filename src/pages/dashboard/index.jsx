
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme, useMediaQuery, Grid, Container} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { tokens } from '../../../theme';
import Heading from '../../components/Heading';
import Bills from '../../components/Cards/Bills';
import Server from '../../components/Cards/Server';
import Region from '../../components/Cards/Region';
import Alarm from '../../components/Cards/Alarm';
import BarCharts from '../../components/Barcharts';
import PieChart from '../../components/PieChart';
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader  from "react-spinners/BeatLoader";
import FadeLoader  from "react-spinners/FadeLoader";



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[700]),
  backgroundColor: purple[700],
  '&:hover': {
    backgroundColor: purple[900],
  },
  margin: theme.spacing(2)
}));

const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const mdScreen = useMediaQuery(theme.breakpoints.up("md"));

   
    const [bodyData, setBodyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingStats, setLoadingStats] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null);
    const [accountNo, setAccountNo]= useState(0)
    const [accountStat, setAccountStats] = useState(null)
    const bodyRef = useRef(null);
    const accountRef = useRef(null)


    const ACCOUNT_API ='https://hiring.tailwarden.com/v1/accounts';
    const open = Boolean(anchorEl);
   
    
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        if (bodyRef.current) {
          setBodyData(bodyRef.current);
          setAccountStats(accountRef.current)
          setLoading(false);
        } else {
          const response = await axios.get(ACCOUNT_API)
          const data = response.data;
          bodyRef.current = data;
          setBodyData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error( error);
        setLoading(false);
      }
    };
    fetchAccounts(); 
  }, []);

  useEffect(() => {
    const fetchStats  = async() => {
      try {
        if (accountRef.current) {
          setAccountStats(accountRef.current)
       
        }
        const response = await axios.get(`https://hiring.tailwarden.com/v1/accounts/${bodyData?.[accountNo]?.id}`)
          const data = response.data;
          accountRef.current = data;
          setAccountStats(data)
     
      } catch (error) {
        console.error(error);
 
      }
    }
    fetchStats()
  }, [accountNo, ])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setAccountNo(event.target.value)   
  }

  if (loading) {
    return <BeatLoader color="#36d7b7" />
  }

 

   console.log(bodyData?.[accountNo]?.provider);

 
  
  return (
    <Box m= '10px' height="100%">

        
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
        height="100%" width="100%"
      >
        <Box m="20px" display="flex" justifyContent="space-between">
      <Heading heading="Account" subHeading="Welcome to your dashboard" />
        
      <Stack direction="row" spacing={2}>
     
     <ColorButton
         id="fade-button"
         aria-controls={open ? 'fade-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
         variant="contained"
         endIcon={<ArrowDropDownIcon />}
       >
         
         <Box display="flex" justifyContent="space-between"alignItems="center">
         
          <Typography variant="h4" color="white" fontWeight="bold"> {bodyData?.[accountNo]?.provider}</Typography>
             <img src={bodyData?.[accountNo]?.logo} className='logo'/>
          </Box>
       </ColorButton>
       </Stack>
       <Menu
         id="fade-menu"
         MenuListProps={{
           'aria-labelledby': 'fade-button',
         }}
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         TransitionComponent={Fade}
       >
         <MenuItem onClick={handleClose} value={0}>{bodyData?.[0]?.provider} account 1</MenuItem>
         <MenuItem onClick={handleClose} value={1}>{bodyData?.[1]?.provider} account 2</MenuItem>
         <MenuItem onClick={handleClose} value={2}>{bodyData?.[2]?.provider}</MenuItem>
         <MenuItem onClick={handleClose} value={3}>{bodyData?.[3]?.provider} </MenuItem>
       </Menu>
      
      
   
      </Box>
      </Box>

      <Box sx={{height: "100%", width: "100%", p: "20px", m:"10px"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
           <Bills stat={accountStat} loadingStats={loadingStats}/>
          </Box>
         </Grid>
         
         <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
            <Server  server={accountStat} loadingStats={loadingStats}/>
           </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
           <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
             <Region region={accountStat} loadingStats={loadingStats}/>
           </Box>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
         <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
            <Alarm alarm={accountStat} loadingStats={loadingStats}/>
          </Box>
        </Grid>
        </Grid>
        
      </Box>
      
      <Box  >
         <Box sx={{p: "10px", }}>
         <Typography variant='h3'>Service over the past month</Typography>
         </Box>
      <Grid container spacing={2}>
         
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
       <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
      
        <BarCharts bodyData={bodyData} accountNo={accountNo} />
        </Box>
       </Grid>
       <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
       <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
       <PieChart bodyData={bodyData} accountNo={accountNo} />
       </Box>
       </Grid>
       </Grid>
       </Box>
    </Box>
  )
}

export default Dashboard