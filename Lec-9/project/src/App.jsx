import React, { useRef, useState } from 'react'

const App = () => {
  // let name="";
  console.log("re-rendering");

  //let {name,setName} = React.useState("");
  
  let inputRef = useRef();
  let [showName, setShowName] = useState("");
  
  // function getName(Inpname){
  //   //name=Inpname;
  //   setName(Inpname);
  //   console.log(name);
  // }

  function changeName(){
    console.log(inputRef.current.value);
    setShowName(inputRef.current.value);
  }

  console.log(inputRef);

  return (
    <div>
       {/* <input onChange={(e) => getName(e.target.value)} type="text" placeholder="Enter name" />    */}
      {/* <button onClick={showName}>Click</button> */}
      {/* <h1>Name is {showName}</h1>  */}

      <input ref={inputRef} type="text" placeholder="Enter name" />
      <button onClick={changeName}>Click</button>
      <h1>Name is {showName}</h1>
    </div>
  )
}

export default App
