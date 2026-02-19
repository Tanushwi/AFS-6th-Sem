import React, { useEffect, useState } from 'react';

// when component render
function App() {

  let [count, setCount] = useState(0);
  let [random,setRandom]=useState(0);

  function fetchTodo() {
    // code to fetch data
    console.log("Data Fetched!.....");
  }

  function changeCount() {
    setCount(count + 1);
  }
  
  function runOnCountChange() {
    console.log("count change function run");
  }
  

  function changeRandom(){
    setRandom(Math.random);
  }
  useEffect(() => {
    fetchTodo;
  }, []);

  
  useEffect(() => {
    runOnCountChange();
  }, [count,random]);
  
  
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={changeCount}>click</button>
      <button onClick={changeRandom}>click</button>
      <h1>count is{count}</h1>
      <h3>random value is{random}</h3>
    </div>
  );
}

export default App;