import InputProvider from "../store/inputContext";
import Input from "./common/input/input";

export default function App (){
    return (
        <InputProvider>
            <section>
                <Input/>
            </section>
        </InputProvider>
    )
}