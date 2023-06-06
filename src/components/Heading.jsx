import React, {useState} from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme"

const Heading = ({heading, subHeading}) => {
    const [accountStat, setAccountStats] = useState(null)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
  return (
 
    <Box mb="30px" >
      <Typography
        variant="h2"
        color={colors.grey[200]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {heading}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subHeading}
      </Typography>
    </Box>
    
  )
}

export default Heading