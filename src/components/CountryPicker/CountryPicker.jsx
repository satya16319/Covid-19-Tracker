import React, {useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import style from './CountryPicker.module.css';
import {fetchcountries} from '../../api/index'

const CountryPicker=({handleCountryChange})=>{
      const [fetchedCountries,setfetcedCountries]=useState([]);
     useEffect(()=>{
         const fetchCountries1=async()=>{
             const countryname=await fetchcountries();
              setfetcedCountries(countryname);
         }
         
         fetchCountries1();
        //  console.log(fetchedCountries);
     },[setfetcedCountries])
    return(
        <div className={style.formcontrol}>
             <FormControl >
           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
               <option value="global">Global</option>
               {fetchedCountries.map((country,i)=>
                   
              <option key={i} value={country}>{country}</option>
               )}
           </NativeSelect>
       </FormControl>
        </div>
       
    )
}

export default CountryPicker;