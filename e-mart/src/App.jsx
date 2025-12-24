import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage.jsx'
import ComputerPage from './stores/pages/ComputerPage.jsx'
import AcPage from './stores/pages/AcPage.jsx'
import WatchPage from './stores/pages/WatchPage.jsx'
import MenPage from './stores/pages/Men.jsx'
import WomenPage from './stores/pages/WomenPage.jsx'
import BooksPage from './stores/pages/BooksPage.jsx'
const App = () => {
  console.log('App rendered')
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/abc' element={<Kitchen />} />
        <Route path='/mobile' element={<MobilePage />} />
        <Route path='/computer' element={<ComputerPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/books' element={<BooksPage />} />
      </Routes>
    </div>
  )
}

export default App
