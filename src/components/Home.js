import React, { Component } from 'react';
import covid from "../covid.svg";
import SubHeading from './common/SubHeading';
import AniText from './common/Text';
import { getCovidData, search } from '../covidState';
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import CovidData from './common/CovidData';
import AOS from 'aos';


class Home extends Component {
   state={
    time:new Date().toString().substring(0,25),
    searchData:null,
    search:null
   }

onChange=(e)=>{
    this.props.search(e.target.value)
}
   
componentDidMount=()=>{
    
this.props.getCovidData()
AOS.init({
    offset:40,
    delay:20,
    duration:1000,
    easing:"ease-in-out",
    mirror:true,
    once:false,
    // desable:"mobile"
 })

   setInterval(()=>{
    this.setState({
        time:new Date().toString().substring(0,25),
    })
   },1000)
}
    render() { 
        let covidStore=this.props.covidStore
        let allData=this.props.covidStore.allData
        let indiaData=this.props.covidStore.indiaData;
        let worldData=this.props.covidStore.worldData||null;
        return ( 
            <div className="main-container">
                <div className="heading-container">
                    <p>C<span><img src={covid} className="covid" /></span>VID-19 STATUS</p>
                </div>
                <div className="time-container">
                    <div>
                        {this.state.time && <p><SubHeading text="Current time" /> : <AniText text={this.state.time} /></p>}
                    </div>
                </div>
                <div className="email-container">
                     <div className="email-icon">
                       <SearchIcon fontSize="large"/>
                    </div>
                    <input type="text" placeholder="Search by country" className="input-text" name="serch" value={(covidStore.search)||""} onChange={this.onChange}/>
                </div>
                {!covidStore.search?<div>
                    <div className="india-world-container">
                        <div className="india">
                            <CovidData data={indiaData} />
                        </div>
                        <div className="world">
                            <CovidData data={worldData} />
                        </div>
                    </div>
                    <div className="all-data-container">
                        {
                            allData && allData.map((ele, index) => {
                                return (
                                    <div data-aos="flip-left">
                                        <CovidData data={ele} key={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>:<div className="search-container">
                    {covidStore.searchData && covidStore.searchData.map((ele,index)=>{
                         return (
                            <div data-aos="flip-left">
                                <CovidData data={ele} key={index} />
                            </div>
                        )
                    })}
                </div>}
            </div>
         );
    }
}

const mapStateToProps=state=>{
    return{
        covidStore:state.covidStore
    }
}
const mapDispatchToProps={
    getCovidData,
    search

} 

export default connect(mapStateToProps,mapDispatchToProps) (Home);