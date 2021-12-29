import styled from "styled-components";

export const MainContainer = styled.section `
    width: 100vw;
    height: 100vh;
    background-image: url('./images/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SearchContainer =styled.div `
    margin-bottom: 100px;
`

export const SearchBox =styled.div `
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    border-radius: 5px;
    width: 300px;
    height: 2.5rem;
`

export const SearchInput =styled.input `
    border: none;
    outline: none;
    font-size: 0.9rem;
    width: 100%;
    height: 100%;
    opacity: 0.75;
`

export const Card =styled.div `
    z-index: 10;
    background-color: #fff;
    opacity: 0.55;
    border-radius: 5px;
    padding: 25px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardLocation =styled.div `
    font-size: 1rem;
    font-weight: 600;
`

export const CardTemperature =styled.div `
    display: flex;
    justify-content: center;
`

export const TemperatureValue =styled.div `
    font-size: 4.5rem;
    font-weight: 700;
`

export const TemperatureUnit =styled.div `
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 15px;
`

export const CardWeather =styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WeatherMain =styled.div `
    font-size: 1.5rem;
    font-weight: 600;
`

export const WeatherDetails =styled.div `
    font-size: 0.75rem;
    font-weight: 500;
`