import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const count = filteredCountries.length;
  
  return (
    <div>
      find countries
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(event) => setSearch(event.target.value) }
      />

      {count > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : count === 1 ? (
        filteredCountries.map((country, id) => (
          <CountryDetail key={id} {...country} />
        ))   
      ) : (
        filteredCountries.map((country, id) => (
          <CountryName key={id} {...country} />
        ))
      )}
    </div>
  );
};

const CountryDetail = (props) => {
  const { name, flag, capital, population, languages } = props
  const [temperature, setTemperature] = useState([]);
  const [image, setImage] = useState([])
  const [wind, setWind] = useState([]);

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=6186f9142205e133d3629f2d1151a752&query=${capital}`)
      .then((response) => {
        setTemperature(response.data.current.temperature);
        setImage(response.data.current.weather_icons[0]);
        setWind(response.data.current.wind_dir)
      })
  })

  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map(x => <li>{x.name}</li> )}
      </ul>
      <p>
        <img src={flag} alt={name} style={{ width: "100px", height: "100px" }} />
      </p>

      <h2>Weather in {capital}</h2>
      <b>temperature:</b> {temperature} Celcius
      <p>
        <img src={image} alt={name} style={{ width: "50px", height: "50px" }} />
      </p>
      <b>wind: mph direction {wind}</b>
    </div>
  )
}

const CountryName = (props) => {
  const { name } = props

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
