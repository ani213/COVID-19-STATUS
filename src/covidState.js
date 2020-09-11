export const initialState={
   countries:null,
   indiaData:null,
   searchData:null,
   allData:null,
   worldData:null,
   error:null,
   search:null,
}

export const SET_ALL_DATA="SET_ALL_DATA";
export const SET_ERROR="SET_ERROR";
export const SEARCH="SEARCH";

export const search=(data)=>dispatch=>{
    dispatch({
        type:SEARCH,
        payload:data
    })
}

export const getCovidData=()=>dispatch=>{
    return new Promise((resolve,reject)=>{
        fetch("https://coronavirus-19-api.herokuapp.com/countries",
        {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
            })
          }
        ).then((response)=>{
            if(response.ok){
                response.json().then((data)=>{
                    dispatch({
                        type:SET_ALL_DATA,
                        payload:data
                    })
                    resolve(true)
                })
            }else{
                dispatch({
                    type:SET_ERROR,
                })
                resolve(false)
            }
        })
    })
}















export default function covidReducer(state=initialState,{type,payload}){
    switch(type){
        case SET_ALL_DATA:
            let india;
            if(payload){
                india=payload.filter(data=>data.country==="India")
            }
            let world;
            if(payload){
                world=payload.filter(data=>data.country==="World")  
            }
            return{
                ...state,
                allData:payload,
                indiaData:india[0],
                worldData:world[0]
            }
        case SET_ERROR:
            return{
                ...state,
                error:"Internet connection is poor or other problem"
            }
        case SEARCH:
            let search;
            if(state.allData&&payload){
                console.log("Pooja")
                search=state.allData.filter(data=>data.country.toLowerCase().includes(payload.toLowerCase()))
            }
            return{
                ...state,
                search:payload,
                searchData:search
            }
        default:
            return state
    }
}