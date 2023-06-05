import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tokens } from '../../../theme'
import {useTheme} from "@mui/material";
import servericon from "../../assets/servericon.svg"
import { purple } from '@mui/material/colors';

const Server = ({server}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Card sx={{ width: 250 , height: 250, backgroundColor: purple[300]}}>
    <CardContent>
      <Typography sx={{ fontSize: 25 }} color={colors.grey[100]} gutterBottom>
        Servers

      </Typography>
      <Typography  variant='h2' color={colors.grey[100]} gutterBottom>
       {server?.servers}

      </Typography>
      <img src={servericon} alt="money-icon" className='icon'/>
  
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default Server