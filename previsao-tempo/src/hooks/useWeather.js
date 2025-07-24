import { WeatherContext } from "../store/weatherContext";
import { useContext } from "react";

export function useWeather() {
  const context = useContext(WeatherContext);

  if (context === undefined) {
    throw new Error("useWeather deve ser usado dentro de um WeatherProvider");
  }

  return context;
}