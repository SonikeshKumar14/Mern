import { useContext } from "react";
import Context from "./context/context";

const Button = () =>{
    const { showfullname,clearscreen } =useContext(Context);

    return(
        <>
         <button type="button" className="btn btn-primary" onClick={showfullname}>Greet</button>
         <button type="button" className="btn btn-danger" onClick={clearscreen}>Clear All</button>
        </>
    )
}

export default Button;
