import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"


function App() {
  

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="produtos" element={<p><produtos/></p>}/>
          <Route path="login" element={<p><login/></p>}/>
          <Route path="carrinho" element={<p><carrinho/></p>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
