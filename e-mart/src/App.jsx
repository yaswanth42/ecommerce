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
import FurniturePage from './stores/pages/FurniturePage.jsx'
import SpeakerPage from './stores/pages/SpeakerPage.jsx'
import TvPage from './stores/pages/TvPage.jsx'
import KitchenPage from './stores/pages/KitchenPage.jsx'
import FridgePage from './stores/pages/FridgePage.jsx'
import MobileSingle from './singles/MobileSingle.jsx'
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
        <Route path='/woman' element={<WomenPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/speaker' element={<SpeakerPage />} />
        <Route path='/tv' element={<TvPage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/mobiles/:id' element={<MobileSingle/>} />
      </Routes>
    </div>
  )
}

export default App
