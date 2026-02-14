
// import React from 'react'
// import {useState} from 'react'
// function App() {
//   //state variable ---> react keeps the track of state variable but not of regular variable
//   let [count,setCount]=useState(0);
//   function increase(){
//     count++;
//     setCount(count); //---> state change nhi krenge toh dom manipulation nhi hogi
//   }
//   return (
//     <div>
//       <h1>State Variable</h1>
//       <h4>count : {count}</h4>
//       <button onClick={increase}>Click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import {useState} from 'react'
const App = () => {
  let [random,setState]=useState(0);
  function random(){
    for(let i=0;i<10;i++){
      num=Math.random();
    }
  }
  return (
    <div>
      <h1>Random number generator</h1>
      <h4>Value: {random}</h4>
      <button>Random</button>
    </div>
  )
}

export default App
