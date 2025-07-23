import { useContext } from "react";
import { InputContext } from "../../../store/inputContext";
import { searchCity } from "../../../services/weatherService";
import { IoIosSearch } from "react-icons/io";


export default function Input (){
    const {inputValue} = useContext(InputContext);

    function handleSearch (){
        if (inputValue.current){
            const city = inputValue.current.value;
            searchCity(city);
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