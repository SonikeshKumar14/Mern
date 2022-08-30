import { useState } from "react";
import Context from "./context";

const Store = (props) =>{

    const [result, setResult] = useState("");

    const handleClick = (e) =>{
        setResult(result.concat(e.target.name))
    }

    const clear = () =>{
        setResult("");
    }

    const backspace = () =>{
        setResult(result.slice(0, -1));
    }

    const calculate = () =>{
        setResult(eval(result));
    }

    return(
        <Context.Provider value={{
           result,
           handleClick,
           clear,
           backspace,
           calculate,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Store;