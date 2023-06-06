import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { tokens } from '../../../theme'
import {useTheme} from "@mui/material";
import moneyIcon from "../../assets/moneyIcon.svg"
import { purple, grey } from '@mui/material/colors';

const Bills = ({stat}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // <Box sx={{backgroundColor={colors.redAccent[100]}}>

    // </Box>
    <Card sx={{ width: 250 , height: 250 ,backgroundColor: grey[300] }}>
      <CardContent>
        <Typography variant='h1' sx={{ fontSize: 25}} color={colors.grey[100]} gutterBottom>
          Bills
        </Typography>
        <Typography variant="h2" color={colors.grey[100]} gutterBottom>
         {stat?.bill}
        </Typography>
        <img src={moneyIcon} alt="money-icon" className='icon'/>
      </CardContent>

    </Card>
  )
}

export default Bills