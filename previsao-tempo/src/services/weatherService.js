export async function searchCity (cidade){
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Ocorreu um erro ao buscar os dados.");
        }
        const resData = await response.json()
        
        const {main , weather , wind , name , sys , visibility, clouds} = resData;

        const processedData = {
            cidade: name,
            pais: sys.country,
            temperatura: main.temp,
            temperatura_max : main.temp_max,
            temperatura_min : main.temp_min,
            sensacaoTermica: main.feels_like,
            visibilidade: (visibility * 0.001),
            umidade: main.humidity,
            pressao : main.pressure,
            velocidadeVento: wind.speed,
            tempo : weather[0].main,
            descricao: weather[0].description,
            icone: weather[0].icon,
            nuvens: clouds.all,
        };
        
        console.log(resData);
        console.log(processedData);
        return processedData;
         
    }
    catch (error) {
        console.error(error);
        throw error;
    }
    

}



