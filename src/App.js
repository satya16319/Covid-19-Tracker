import {React,Component} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from './api/index';
// import image from './Image/codvit.jpg'
class App extends Component {
    state={
        data:{},
          country:'',

    }
   async componentDidMount(){
           const fetchdata=await fetchData();
        //    console.log({fetchdata});
           this.setState({
               data:fetchdata,
           });
    }
    handleCountryChange= async(country)=>{
    //    console.log(country);
       const fetchdata=await fetchData(country);
       this.setState({
           data:fetchdata,
           country:country,

       })
    //    console.log(fetchdata);


    }
      render(){
          const {data,country}=this.state;
        //    console.log(data);
           return(
               <div className={style.container}>
                   <h1>COVID-19</h1>
                   <img className="style.image" src='https://i.ibb.co/7QpKsCX/image.png' alt="COVID-19"/>
                  <Cards data={data}/>
                  <CountryPicker handleCountryChange={this.handleCountryChange}/> 
                   <Chart data={data} country={country}/>
               </div>
           )
      }
}

export default App;