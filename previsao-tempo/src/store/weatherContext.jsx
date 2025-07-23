import { createContext } from "react";
import {useState , useRef , useEffect} from 'react' 
import { searchCity } from "../services/weatherService";

export const WeatherContext = createContext();

export default function WeatherProvider ({children}){
    const [weatherData , setWeatherData] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);

    async function handleFetchWeather (city){
        setIsLoading(true)
        setError(null)

        try{
            const data = await searchCity(city);
            setWeatherData(data);
        }

        catch (err){
            setError(err.message)
            setWeatherData(null);
        }

        finally {
            setIsLoading(false)
        }
        
    }


    useEffect (() => {
        handleFetchWeather('recife')
    }, [])


    const value = {
        weatherData,
        isLoading,
        error,
        handleFetchWeather,
    }


    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )

}
