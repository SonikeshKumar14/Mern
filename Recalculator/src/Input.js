import React, {useContext} from 'react'
import Context from './context/context';

function Input() {
const {result} = useContext(Context);
  return (
    <div>    
       <form action="">
        <input type="text" value={result}/>
       </form>
    </div>
  )
}

export default Input;