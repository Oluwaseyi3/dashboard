import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tokens } from '../../../theme'
import {useTheme} from "@mui/material";
import alarmIcon from "../../assets/alarmIcon.svg"
import { purple } from '@mui/material/colors';

const Alarm = ({alarm}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ width: 250 , height: 250, backgroundColor: purple[300]}}>
    <CardContent>
    <Typography sx={{ fontSize: 25 }} color={colors.grey[100]}gutterBottom>
        Alarms
      </Typography>
      <Typography variant="h2" color={colors.grey[100]} gutterBottom>
       {alarm?.alarms}
      </Typography>
      <img src={alarmIcon} alt="money-icon" className='icon'/>
    </CardContent>
   
  </Card>
  )
}

export default Alarm