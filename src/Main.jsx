import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ProjectsSection from './Projetos.jsx'
import Sobre from './Sobre.jsx'
import Contato from './Contato.jsx'
import Curriculo from './Curriculo.jsx'
import Header from './Header.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        
       
        <Route path="/" element={<App />}/>
          <Route index element={<ProjectsSection/>}/>
          <Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/curriculo" element={<Curriculo/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

