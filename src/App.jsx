import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=83ee30c7c6bb39c9aa271149f0bc5465 `;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=83ee30c7c6bb39c9aa271149f0bc5465`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (

    <div className="App">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter the location"
        />
      </div>
      <di className="container">
        <div className="top">
          <div className="location">
            {data.name}
          </div>
          <div className="temp">
            {data.main ?<h1>{data.main.temp}F</h1>  : null}           
          </div>
          <div className="description">
            {data.weather? <p>{data.weather[0].main}</p>:null}
            
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ?<p className="bold">{data.main.feels_like}</p> : null }
            
            
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ?<p className="bold">{data.main.humidity}</p>:null }

            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main?<p className="bold">{data.wind.speed}</p> : null }
            
            <p>Wind speed</p>
          </div>
        </div>
      </di>
    </div>
  );
}

export default App;

