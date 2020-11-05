import React, {useState,useEffect} from 'react';
import {fetchDailyData} from '../../api/index';
import {Line ,Bar} from 'react-chartjs-2';
import style from './Chart.module.css'
const Chart=({data:{confirmed,recovered,deaths},country})=>{
   console.log(country);
    const [dailyData,setDailyData]=useState([]);
    useEffect(() => {
        const feetchApi=async ()=>{
            const dailyData=await fetchDailyData();
            setDailyData(dailyData);
        }
        feetchApi();
        // console.log(dailyData);
    },[])
    // console.log(confirmed);
//   console.log(confirmed,recovered,deaths);
    const lineChart=(
        dailyData.length ?
         (<Line 
            data={{
                labels:dailyData.map(({Date})=>Date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:"Infected",
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:'red',
                    fill:true,
                }],

            }}/>):null
    );
    const barchart=(
          confirmed ?
          (
              <Bar
              data={{
                labels:['Infected', 'Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data:[confirmed.value,recovered.value ,deaths.value],

                }],
              }}
              options={{
                  legend:{display:false},
                  title:{display:true, text:`Current state in ${country}`}
              }}
               
                 />
          ):null
    );
    return(
        <div className={style.container}>
         {country ? barchart:lineChart}
          {/* {lineChart}
          {barchart} */}
        </div>
    )
}

export default Chart;