import { useState } from "react";
import Context from "./context";

const Store = (props)=>{




    const data = {
        firstname:'',
        lastname:''

    }
    const [maindata,setmaindata] = useState(data);
    const [result,setresult] = useState('');


    const clearscreen = ()=>{
        setresult('');
    }
    const titlecase = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase(); 
    const showfullname = ()=>{
        const fullName = titlecase(maindata.firstname)+" "+titlecase(maindata.lastname);
        setresult(fullName);
    }


    return(
        <Context.Provider value={{
            maindata,
            setmaindata,
            clearscreen,
            showfullname,
            result
        }}>
            {props.children}
        </Context.Provider>
    )
}
export default Store;
