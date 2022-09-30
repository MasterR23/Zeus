import React from 'react'
import ReactDOM from 'react-dom'
import './Style/Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Routes/LadingPage'
import ProductComic from './Routes/Product'
import Episodes from './Routes/Episodes'
import Mythology from './Components/Mythology'
import Text from './Routes/Text'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/comic' element={<ProductComic />} />
        <Route path='/comic/:numberEpisode' element={<Episodes />} />
        <Route path='/mitologia' element={<Mythology />} />
        <Route path='/mitologia/:textInformation' element={<Text />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('View')
)
