
const Details = ({details,clearSearch}) => {
  return (
    <div className='details'>
        <div className="temp">
        {details.current.temp_c} °C
        </div>
        <div className="">
          <p className="w-location">{details.location.country}</p>
          <p className="date-time">{details.current.last_updated}</p>
        </div>

        <img src={details.current.condition.icon} alt="" />
        <h2 className="weather-txt">{details.current.condition.text} </h2>
        <div className="w-details">
          <div className="info">
            {/* logo */}
            <h3>Wind</h3>
            <span className="value">
              {details.current.wind_kph}
            </span>
          </div>
          <div className="info">
            {/* logo */}
            <h3>Humidity</h3>
            <span className="value">
              {details.current.humidity}
            </span>
          </div>
          <div className="info">
            {/* logo */}
            <h3>Cloud</h3>
            <span className="value">
              {details.current.cloud}
            </span>
          </div>
        </div>
        <button type="submit" onClick={clearSearch}>
            Go Back 
            {/* icon */}
        </button>
    </div>
  )
}

export default Details