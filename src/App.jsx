import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"
import Header from "./components/shared/Hearder"


function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/produtos" element={<p>produtos</p>}/>
          <Route path="/login" element={<p>login</p>}/>
          <Route path="/carrinho" element={<p>CARRINHO</p>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
