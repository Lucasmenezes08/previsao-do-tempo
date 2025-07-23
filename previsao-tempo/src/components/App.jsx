import WeatherProvider from "../store/weatherContext";
import InputProvider from "../store/weatherContext";
import Header from "./layout/header/header";

export default function App (){
    return (
        <WeatherProvider>
            <section>
                <Header/>
            </section>
        </WeatherProvider>
    )
}