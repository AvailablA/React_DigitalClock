import React from 'react';
import './App.css';
import { useState } from 'react';


const App = ()=>
{


  let time = new Date().toLocaleTimeString();
  
  const[curTime,setTime] = useState(time);

  const updateTime = ()=>
  {
    time = new Date().toLocaleTimeString();

    setTime(time);
  };

  setInterval(updateTime,1000)
  
  
  return(
    <>
        <h1>{time}</h1>
    </>
  );
}

export default App;
