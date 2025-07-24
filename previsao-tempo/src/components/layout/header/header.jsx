import { useContext, useState } from "react";
import Input from "../../common/input/input";
import { WeatherContext } from "../../../store/weatherContext";
import '../header/header.scss'

export default function Header (){
    const {weatherData, isLoading ,error, handleFetchWeather} = useContext(WeatherContext);

    return (
        <header>
            <h1>Tempo</h1>
            
            <section className="header-input-section">
                <Input/>
            </section>

            <section className="header-weather-section">
                <section className="weather-city">
                    {!isLoading && !error && weatherData && ( <h2>{weatherData.cidade}</h2>)}
                    {!isLoading && !error && weatherData && ( <p>{weatherData.descricao}</p>)}  
                </section>
                
                <section className="weather-temperatura">
                    {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura.toFixed(0)}<span className="weather-span">º</span></p>)}
                </section>
            </section>


            <section className="header-weather-max-min-section">
                <section className="weather-temperatura-min">
                    {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura_min.toFixed(1)}º</p>)}
                    <p>min</p>
                </section>


                <section className="weather-temperatura-max">
                    {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura_max.toFixed(1)}º</p>)}
                    <p>max</p>
                </section>
            </section>


            <section>
                <p>Dados do tempo</p>

                <section>
                    <p>Sensação térmica</p>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.sensacaoTermica.toFixed(0)}º</p>)}
                </section>

                <section>
                    <p>Visibilidade</p>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.visibilidade} Km</p>)}
                </section>

                <section>
                    <p>Pressão</p>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.pressao} hPa</p>)}
                </section>


                <section>
                    <p>Umidade</p>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.umidade} %</p>)}
                </section>

                <section>
                    <p>Velocidade do vento</p>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.velocidadeVento.toFixed(1)} km/h</p>)}
                </section>

            </section>
        </header>
    )
}