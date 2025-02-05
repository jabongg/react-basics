import { useState } from "react";
import React from 'react'


function Counter() {

    const [counter, setCounter] = useState(15)

    //let counter = 15;

    const increaseCounter = () => {
        //counter = counter + 1
        setCounter(counter + 1)
        //console.log("increase counter clicked", counter);
    }

    const decreaseCounter = () => {
        //counter = counter - 1
        setCounter(counter - 1)
        //console.log("decrease counter clicked", counter);

    }

    return (
      <>
        <div>
           <h1 className="bg-green-400 text-black ">Counter : {counter} </h1>
         </div>
         <button onClick={increaseCounter}>increase</button>
         <br />
         <button onClick={decreaseCounter}>decrease</button>

         <p>Footer : {counter} </p>
      </>
    )
  }
  
export default Counter
  