
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, IconButton, Typography, useTheme, useMediaQuery, Grid} from "@mui/material";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";
import Email from "@mui/icons-material/Email";
import PointOfSale from "@mui/icons-material/PointOfSale";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Traffic from "@mui/icons-material/Traffic";
import { tokens } from '../../../theme';
import Heading from '../../components/Heading';
import ServiceBox from '../../components/ServiceBox';
import axios from 'axios'

const Dashboard = () => {

    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const colors = tokens(theme.palette.mode);


    const [bodyData, setBodyData] = useState(null);
    const [accountStat, setAccountStats] = useState(null)
    const [loading, setLoading] = useState(true);
    const [loadingStats, setLoadingStats] = useState(true)
  
  
    const bodyRef = useRef(null);
    const accountRef = useRef(null)

    const ACCOUNT_API ='https://hiring.tailwarden.com/v1/accounts';
    // const ACCOUNT_STATS_API=`https://hiring.tailwarden.com/v1/accounts/${bodyData[0].id}`

    
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

    const fetchStats  = async() => {
      try {
        if (accountRef.current) {
          setAccountStats(accountRef.current)
          setLoadingStats(false)
        }
        const response = await axios.get(ACCOUNT_STATS_API)
          const data = response.data;
          accountRef.current = data;
          setAccountStats(stats)
          setLoadingStats(false)
      } catch (error) {
        console.error( error);
        setLoading(false);
      }
    }
   
    fetchAccounts();
    // fetchStats()
  }, [bodyData[0].id]);

  if (loading) {
    return <p>Loading Body data...</p>;
  }

  
  return (
    <div>

        
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >

      <Heading heading="Account" subHeading="Welcome to your dashboard" />
      <ServiceBox id={bodyData[0].id} name={bodyData}/>
      </Box>
    </div>
  )
}

export default Dashboard