import React, {useState, useRef, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js"

const PieChart = ({bodyData, accountNo}) => {
    const [accountCost, setAccountCost] = useState([])
    const accountCostRef = useRef(null)

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
                console.log(accountCost);
            } catch (error) {
              console.error(error);
             
            }
        
   
          }
          fetchAccountCost()
    }, [bodyData?.[accountNo]?.id])
    console.log(accountCost);

    // const data = {
    //     labels: accountCost.map((account) => account),
    //     data: 
    // }
  return (
    <div>
        {accountCost.map((object, i) => (
            <div key={i}>
                {
                object.groups.map((item) => (
                    <div>{item.amount}</div>
                ))
            }
            </div>
            
        ))}
    </div>
  )
}

export default PieChart