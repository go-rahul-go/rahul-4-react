import { useState } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Education from "./components/Education"
import Certs from "./components/Certs"
import MessageBox from "./components/MessageBox"
import Footer from "./components/Footer"
import Sticker from "./components/Sticker"
import ConnectBox from "./components/ConnectBox"




function App() {
  const [showConnect,connectStatus]=useState(false);
  

  return (
    <>
      <Nav />
      <Hero />
      <Skills />
      <Works />
      <Education/>
      <Certs/>
      <MessageBox/>
      <Footer/>
      <Sticker connectStatus={connectStatus} showConnect={showConnect}/>
      {
        showConnect&&<ConnectBox connectStatus={connectStatus} showConnect={showConnect}/>
      }
     
    </>
  )

}

export default App
