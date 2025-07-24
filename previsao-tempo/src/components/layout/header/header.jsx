import { useContext, useState } from "react";
import Input from "../../common/input/input";
import { WeatherContext } from "../../../store/weatherContext";
import '../header/header.scss'
import Loading from "../../common/loading/loading";


export default function Header (){
    const {weatherData, isLoading ,error, handleFetchWeather} = useContext(WeatherContext);

    if (isLoading) {
        return <Loading/>
    }

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
                    {!isLoading && !error && weatherData && (<p>mín</p>)}
                </section>


                <section className="weather-temperatura-max">
                    {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura_max.toFixed(1)}º</p>)}
                    {!isLoading && !error && weatherData && (<p>max</p>)}
                </section>
            </section>

            <section className="header-dados-section-template">
 
                <section className="header-dados-section" >
                    <p className="header-dados-title">Dados do tempo</p>

                    <section className="header-dados-grid">
                        <section className="header-dados-sensacaotermica">
                            <p>Sensação térmica</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.sensacaoTermica.toFixed(0)}º</p>)}
                        </section>

                        <section className="header-dados-visibilidade">
                            <p>Visibilidade</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.visibilidade} Km</p>)}
                        </section>

                        <section className="header-dados-pressao">
                            <p>Pressão</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.pressao} hPa</p>)}
                        </section>


                        <section className="header-dados-umidade">
                            <p>Umidade</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.umidade} %</p>)}
                        </section>

                        <section className="header-dados-velocidadedovento">
                            <p>Velocidade do vento</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.velocidadeVento.toFixed(1)} km/h</p>)}
                        </section>

                         <section className="header-dados-velocidadedovento">
                            <p>nuvens</p>
                            {!isLoading && !error && weatherData && ( <p>{weatherData.nuvens} %</p>)}
                        </section>

                    </section>
                </section>
            </section>
        </header>
    )
}