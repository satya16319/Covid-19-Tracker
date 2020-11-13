import axios from 'axios';

const url='https://covid19.mathdro.id/api';
  
 const fetchData=async(country)=>{
     console.log(country);
     
     let changeurl=url;
     if(country)
     {
        if(country!=='global')
         changeurl=`${url}/countries/${country}`;
     }
    try{
           const {data:{confirmed,recovered,deaths,lastUpdate,}}=await axios.get(changeurl);
           return {confirmed,recovered,deaths,lastUpdate,};
    }
    catch(error){
      console.log(error)
    }
}

// export default fectchData;

const fetchDailyData=async ()=>{
    try{
        const {data}=await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            Date:dailyData.reportDate,
                  
        }));
        return modifiedData;
 }
 catch(error){
   console.log(error)
 }
}

const fetchcountries=async()=>{
    try{
         const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
    }
    catch{

    }
}
export {fetchDailyData,fetchData,fetchcountries};
