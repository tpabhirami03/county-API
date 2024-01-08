import { useState } from 'react';
import './App.css';

function App() {



  const[data,uploadData]=useState("")
  const[countryDetails,setcountryDetails]=useState("")
  const setInput=(e)=>{

uploadData(e.target.value);

  }
const search=async()=>{

  let countryData=data
  let result=await fetch(`https:restcountries.com/v3.1/name/${countryData}?fullText=true`)
    
  // console.log(result.json());

  result.json().then(res=>{

    console.log(res);
    setcountryDetails(res[0])
  })
}

const displayData=(countryDetails)=>{

  if(countryDetails){


    return(


      <div className="card shadow " style={{ width: '18rem' }}>
      <img src={countryDetails.flags.png} className="card-img-top" alt="..." />
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{countryDetails.name.common}</li>
          <li className="list-group-item">{countryDetails.capital}</li>
          <li className="list-group-item">{countryDetails.region}</li>
          <li className="list-group-item">{countryDetails.population}</li>
          <li className="list-group-item">{countryDetails.timezones}</li>
        </ul>
      </div>
    </div>
    )
  }

}


  return (
    <div className="App">
          <div className="container mt-5">
        <h1 className="mt-5 text-center text-primary"> know more about country</h1>
        <div className="row">
         <div className="col-4"></div>
         <div className="col-4 mt-5 border p-4 rounded">
         
          <div className="d-flex justify-content-between">
             <input id="country_box"  type="text" placeholder="search by country name" onChange={setInput} className="form-control me-2"/>
 
             <input onClick={search} type="button" value="search" className="btn btn-success"/>
 
          </div>
         </div>
         <div className="col-4"></div>
         
 
        </div>
        <div id="output">
          {displayData(countryDetails)}
           </div>
     </div>

    </div>

  );
}

export default App;