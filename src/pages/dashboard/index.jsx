
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme, useMediaQuery, Grid} from "@mui/material";

import { tokens } from '../../../theme';
import Heading from '../../components/Heading';
// import ServiceBox from '../../components/ServiceBox';
import axios from 'axios'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Bills from '../../components/Cards/Bills';
import Server from '../../components/Cards/Server';
import Region from '../../components/Cards/Region';
import Alarm from '../../components/Cards/Alarm';
import PieChart from '../../components/PieChart';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"

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
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
    const colors = tokens(theme.palette.mode);


    const [bodyData, setBodyData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [loadingStats, setLoadingStats] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [accountNo, setAccountNo]= React.useState(0)
    const [accountCost, setAccountCost] = useState([])
    const accountCostRef = useRef(null)


  
    const bodyRef = useRef(null);
    
    const accountRef = useRef(null)


    const ACCOUNT_API ='https://hiring.tailwarden.com/v1/accounts';
    const open = Boolean(anchorEl);
    const [accountStat, setAccountStats] = useState(null)
    

    
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

    const fetchAccountCost = async() => {
      try {
        if (accountCostRef.current) {
          setAccountCost(accountCostRef.current)
       
        }
        const response = await axios.get(`https://hiring.tailwarden.com/v1/accounts/${bodyData?.[accountNo]?.id}/history`)
          const data = response.data;
          accountCostRef.current = data;
          setAccountCost(data)
          console.log(accountCost);
      } catch (error) {
        console.error(error);
       
      }
  

    }
    fetchAccountCost()
  }, [accountNo, ])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };


  const handleClose = (event) => {
    setAnchorEl(null);
    setAccountNo(event.target.value)
   
  };

  if (loading) {
    return <p>Loading Body data...</p>;
  }

  //  console.log(bodyData?.[accountNo]?.provider);
   console.log(accountCost);
 
  
  return (
    <Box>

        
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

      <Box sx={{height: "50vh", width: "100%", p: "10px",}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
           <Bills stat={accountStat}/>
          </Box>
         </Grid>
         
         <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
            <Server  server={accountStat}/>
           </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
           <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
             <Region region={accountStat} />
           </Box>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
         <Box width="100%" display="flex" alignItems="center" justifyContent="center" >
            <Alarm alarm={accountStat} />
          </Box>
        </Grid>
        </Grid>
      </Box>
       {/* <PieChart bodyData={bodyData} accountNo={accountNo} /> */}
    </Box>
  )
}

export default Dashboard