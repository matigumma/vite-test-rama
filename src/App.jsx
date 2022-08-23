// esto es un componente de react
// packetes:
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// componentes:
import Home from './home'
import Blog from './blog'
//imports arriba siempre

//funciones con la primer letra mayuscula 
function App() {
  // const [ancho, setAncho] = useState(window.innerWidth)
  // ...
  // siempre tiene que devolver un solo elemento
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<>
              <span> este es un elemento adentro de un gragmento jsx</span>
            </>} />
        </Routes>
    </Router>
  )
}

export default App
