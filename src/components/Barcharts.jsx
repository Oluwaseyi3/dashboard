import React, {useState, useRef, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'
import Chart from 'chart.js/auto';
import { tokens } from '../../theme'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement} from "chart.js"
import { useTheme} from "@mui/material";


ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarCharts = ({bodyData, accountNo}) => {
    const theme = useTheme();
    const [accountCost, setAccountCost] = useState([])
    const accountCostRef = useRef(null)
    const colors = tokens(theme.palette.mode);
    

    useEffect(() => {
        const fetchAccountCost = async() => {
            try {
              if (accountCostRef.current) {
                setAccountCost(accountCostRef.current)
             
              }
              const response = await axios.get(`https://hiring.tailwarden.com/v1/accounts/${bodyData?.[accountNo]?.id}/history`)
                const data = response.data;
                accountCostRef.current = data;
                setAccountCost(data)
              
            } catch (error) {
              console.error(error);
             
            }
        
      
          }
          fetchAccountCost()
    }, [])

    let account ={
        amount: accountCost.map(x=> x.groups.map(item => item.amount)),
        key: accountCost.map(x=> x.groups.map(item => item.key))
    }
    
    

    Chart.defaults.font.size = 16;

    const data = {
        labels: account.key[0], 
        datasets: [{
          label: ` Services`,
          data: account.amount[0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          color: colors.grey[500]
        }]
      };
    
      var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            font: 10,
            color: "white"
          },
        },
      }

  return (
    <div>
    
        <Bar data={data} height={400} options={options} />
    </div>
  )
}

export default BarCharts