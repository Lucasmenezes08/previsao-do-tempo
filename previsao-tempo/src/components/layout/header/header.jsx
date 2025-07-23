import { useContext, useState } from "react";
import Input from "../../common/input/input";
import { WeatherContext } from "../../../store/weatherContext";

export default function Header (){
    const {weatherData, isLoading ,error, handleFetchWeather} = useContext(WeatherContext);

    return (
        <section>
            <h1>Previsão do tempo</h1>
            {!isLoading && !error && weatherData && (
        <h2>{weatherData.cidade}</h2>
      )}
            
            <section>
                <Input/>
            </section>

            <section>
                
            </section>
        </section>
    )
}