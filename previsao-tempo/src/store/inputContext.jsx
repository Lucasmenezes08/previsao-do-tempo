import { createContext } from "react";
import {useState , useRef} from 'react' 

export const InputContext = createContext();


export default function InputProvider ({children}){
    const inputRef = useRef(null);

    const value = {
        inputValue : inputRef,
    }

    return (
        <InputContext.Provider value={value} >
            {children}
        </InputContext.Provider>
    )
}