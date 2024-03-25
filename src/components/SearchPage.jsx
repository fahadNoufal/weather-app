import React, { useState } from 'react'
import Details from './Details'


const SearchPage = () => {

    const [location,setLocation]=useState('')
    const [details,setDetails] = useState('')

    const getDetails=async (e)=>{
        e.preventDefault()
        try{
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b383200756ae425a97973701241703&q=${location}`)
            const data= await response.json()
            setDetails(data);
        }catch(e){
            console.log("caught");
        }
    }
    console.log(details);

    const handleLocationChange=(e)=>{

        setLocation(e.target.value)
    }
    console.log(location);

    const clearSearch =()=>{
        setDetails("")
    }

  return (
    <div className="App">

        {
        details?
        
        <Details details={details} clearSearch={clearSearch}/>:
        
        <div className='search'>
            <div className="heading">
                <h1>Get Wearher</h1>
                {/* weather icon */}
            </div>
            <form className="search-section" onSubmit={e=>getDetails(e)}>
                <div className='search-box'>
                    <label className="search-label">
                        {/* location icon */}
                        Enter your location
                    </label>
                    <div className="search-bar">
                        <input type="text" className='' onChange={e=>{handleLocationChange(e)}} value={location} placeholder='Type here...' />
                        {/* icon */}
                    </div>
                </div>
                <button type="submit">
                    search 
                    {/* icon */}
                </button>
            </form>
        </div>
        }
    </div>
  )
}

export default SearchPage