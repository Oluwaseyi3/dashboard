import React, {useState} from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme"


const ServiceBox = ({id}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [statId, setStatId] = useState(id)
    console.log(statId);
    const ACCOUNT_STATS_API=`https://hiring.tailwarden.com/v1/accounts/${statId}`
    // console.log(ACCOUNT_STATS_API);
  return (
    <Typography
    variant="h2"
    color={colors.grey[100]}
    fontWeight="bold"
    sx={{ mb: "5px" }}
  >
   {id}
    </Typography>
  )
}

export default ServiceBox