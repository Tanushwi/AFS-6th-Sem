import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'
import {sum} from './component/headerComponent/Header'
import {multiply} from './component/headerComponent/Header'
const App = () => {
  //sum(2,3);---> error because sum is not defined in this file
  let ans=sum(2,5);
  return (
    <div>
      <Header ans={ans} name="Tanushwi"></Header>
      {/* <p>{ans}</p> */}
      <Footer ans={ans} name="Priyanshi"></Footer>
    </div>
  )
}

export default App
