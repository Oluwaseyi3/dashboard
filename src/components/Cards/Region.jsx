import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tokens } from '../../../theme'
import {useTheme} from "@mui/material";
import earthicon from "../../assets/earthicon.svg"
import { purple } from '@mui/material/colors';

const Region = ({region}) => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ width: 250 , height: 250,  backgroundColor: purple[300] }}>
    <CardContent>
    <Typography sx={{ fontSize: 25 }} color={colors.grey[100]} gutterBottom>
       Regions
      </Typography>
      <Typography variant='h2' color={colors.grey[100]} gutterBottom>
       {region?.regions}
      </Typography>
      <img src={earthicon} alt="earth-icon" className='icon'/>
    </CardContent>
   
  </Card>
  )
}

export default Region