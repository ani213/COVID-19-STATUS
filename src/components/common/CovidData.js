import React, { Component } from 'react'
import Card from './Card';
class CovidData extends Component {
    state = {  }
    render() { 
        let data=this.props.data||null
        return ( 
           <Card>
               <div className="covid-data-main-div">
               <div className="data-countary-container">
                   <p><span className="country">Country : </span><span className="country-data">{(data && data.country && data.country.toUpperCase())||""}</span> </p> 
               </div>
               <div className="child-data">
                   <p><span className="child-data">Total Cases : </span><span>{data && data.cases}</span> </p>                   
               </div>
               <div className="child-data">
                   <p><span>Today Cases : </span><span>{data && data.todayCases}</span> </p>                   
               </div>
               <div className="recovered">
                   <p><span>Recovered : </span><span>{data && data.recovered}</span> </p>                   
               </div>
               <div className="death">
                   <p><span>Deaths : </span><span>{data && data.deaths}</span> </p>                   
               </div>
               <div className="death">
                   <p><span>Tody Deaths : </span><span>{data && data.todayDeaths}</span> </p>                   
               </div>
               <div className="active">
                   <p><span>Active : </span><span>{data && data.active}</span> </p>                   
               </div>
               <div className="critical">
                   <p><span>Critical : </span><span>{data && data.critical}</span> </p>                   
               </div>
               <div className="child-data">
                   <p><span>Total Tests : </span><span>{data && data.totalTests}</span> </p>                   
               </div>
               <div className="child-data">
                   <p><span>Tests Per One Million : </span><span>{data && data.testsPerOneMillion}</span> </p>                   
               </div>
               <div className="child-data">
                   <p><span>Case Per One Million: </span><span>{data && data.casesPerOneMillion}</span> </p>                   
               </div>
               <div className="death">
                   <p><span>Deaths Per One Million: </span><span>{data && data.deathsPerOneMillion}</span> </p>                   
               </div>
               </div>
           </Card>
         );
    }
}
 
export default CovidData;