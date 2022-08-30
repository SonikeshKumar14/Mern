import { useContext } from "react";
import Context from "./context/context";

const Greet = () =>{
    const {result}=useContext(Context);
    
    if(result)
    {
        return(
            <div>
                <h2>Welcome {result} and Nice to meet you</h2>
            </div>
        )
    }
}

export default Greet;