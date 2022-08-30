import { useContext } from "react";
import Context from "./context/context";

const Input = (prop) =>{
  const { maindata, setmaindata } =useContext(Context);
  console.log(prop)
  
  function handelchange(e){
    const {name,value} = e.target;
    setmaindata({
      ...maindata,
      [name]:value
    })
    
  }

   return(
     <>
        <h1 className="alert alert-info text-center">Greet App</h1>
        <div className="form-group">
          <label htmlFor="">FirstName</label>
          <input name="firstname" className="form-control" value={maindata.firstname} onChange={handelchange} type="text" placeholder="Type first name here" />
        </div>
        <div className="form-group">
          <label htmlFor="">LastName</label>
          <input name="lastname" className="form-control" value={maindata.lastname} onChange={handelchange} type="text" placeholder="Type last name here" />
        </div>
     </>
   )
}

export default Input;