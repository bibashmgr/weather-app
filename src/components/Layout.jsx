import React from "react";
import { useState } from "react";
import axios from "axios";

// icons
import {FaSearch} from 'react-icons/fa'

// components
import { MainContainer, SearchContainer, SearchBox, SearchInput, Card, CardLocation, CardTemperature, TemperatureValue, TemperatureUnit, CardWeather, WeatherMain, WeatherDetails } from "./LayoutElements";

const Layout = () => {

    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

    const [cityName, setCityName] = useState('');
    const [details, setDetails] = useState('');

    const handleChange = (e) => {
        setCityName(e.target.value);
    }

    const handleClick = () => {

        axios({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        })
            .then(res => res.data)
            .then(data => {
                setDetails(data);
            })
            .catch(error => console.log(error.message));

        setCityName('');

    }

    return(
        <MainContainer>
            <SearchContainer>
                <SearchBox>
                    <SearchInput placeholder="Enter your city" onChange={handleChange} value={cityName} />
                    <FaSearch style={{fontSize: '1.25rem', color: '#000', cursor:'pointer'}} onClick={handleClick} />
                </SearchBox>
            </SearchContainer>
            {details.main &&
                <Card>
                    <CardLocation>{details.name}</CardLocation>
                    <CardTemperature>
                        <TemperatureValue>{details.main.temp}</TemperatureValue>
                        <TemperatureUnit>&deg;C</TemperatureUnit>
                    </CardTemperature>
                    <CardWeather>
                        <WeatherMain>{details.weather[0].main}</WeatherMain>
                        <WeatherDetails>
                            {details.weather[0].description}
                        </WeatherDetails>
                    </CardWeather>
                </Card>
            }
        </MainContainer>
    )
}

export default Layout