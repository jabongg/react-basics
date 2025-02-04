import React from 'react'
import Designer from './Designer'


function App() {

  let designer1 = {
    designerName : "Alice Bourton",
    age : 31
  }

  let designer2 = {
    designerName : "Bonnie Green",
    age : 29
  }

  return (
    <>
      <div>
         <h2>Hello World. </h2>
       </div>
       <Designer channel="nukkadcode" designerObject={designer1} />
       <br />
       <Designer channel="nukkadcode" designerObject={designer2} />
    </>
  )
}

export default App
