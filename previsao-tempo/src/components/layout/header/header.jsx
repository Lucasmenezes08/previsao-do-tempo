import { useContext, useState } from "react";
import Input from "../../common/input/input";
import { WeatherContext } from "../../../store/weatherContext";

export default function Header (){
    const {weatherData, isLoading ,error, handleFetchWeather} = useContext(WeatherContext);

    return (
        <section>
            <h1>Previsão do tempo</h1>
            
            <section>
                <Input/>
            </section>

            <section>
                {!isLoading && !error && weatherData && ( <h2>{weatherData.cidade}</h2>)}
                {!isLoading && !error && weatherData && ( <p>{weatherData.descricao}</p>)}
            </section>



            <section>
                {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura.toFixed(0)}º</p>)}
            </section>


            <section>
                <section>
                    {!isLoading && !error && weatherData && ( <p>{weatherData.temperatura_min.toFixed(1)}º</p>)}
                    <p>min</p>
                </section>


                <section>
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

        </section>
    )
}