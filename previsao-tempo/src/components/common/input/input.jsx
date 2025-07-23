import { useContext, useRef } from "react";
import { WeatherContext } from "../../../store/weatherContext";
import { searchCity } from "../../../services/weatherService";
import { IoIosSearch } from "react-icons/io";


export default function Input (){
    const inputValue = useRef(null)
    const {weatherData, isLoading ,error, handleFetchWeather} = useContext(WeatherContext);

    function handleSearch (){
        if (inputValue.current){
            const city = inputValue.current.value;
            handleFetchWeather(city);
            handleCity(city);
        }
    }

    return (
        <section>
            <input 
                type="text"
                ref={inputValue}
                placeholder="Insira a cidade"
                maxLength={30}
                minLength={2}
                defaultValue={'recife'}
            />
            <button onClick={handleSearch}><IoIosSearch /></button>
        </section>
    )

}