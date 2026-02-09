import React from "react";

function App() {
  let a=Math.random();
  let num1=10;
  let num2=5;
  return (
    <div>
      <Header></Header>
      <h1>Hello, World!</h1>
      <h2>{a}</h2>
      <h3>{num1 + num2}</h3>
      <br />
      <Footer></Footer>
    </div>
  );
}

//component should start with capital letter
function Header(){
  return(
    <div>
      <div className="logo">Logo</div>
      <div className="navlinks">
        <ul>
        <li className="navlist">Home</li>
        <li className="navlist">About</li>
        <li className="navlist">Contact</li>
        </ul>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <p>Copyright 2026</p>
    </div>
  )
}
export default App;