import React from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  return (
   <>
    <h2 className='alert alert-info text-center'>Calculator</h2>
    <div className='container'>
     <Input />
     <Button/>
     </div>
   </>
  );
}

export default App;
