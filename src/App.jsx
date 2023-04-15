import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Atlas from './Components/Atlas';
import Jamoa from './Components/Jamoa';
import Header from './Components/Header';
import Beshariq from './Kartalar/bewariq';
import Paranda from './Kartalar/paranda';
import Chorva from './Kartalar/Chorva';
import Turistik from './Kartalar/Turistik';
import Taqsim from './Kartalar/Taqsim';
import Oziq from './Kartalar/Oziq';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/atlas" element={<Atlas/>}/>
      <Route path="/jamoa" element={<Jamoa/>}/>
      <Route path="/atlas" element={<Atlas/>}/>
      <Route path="/atlas" element={<Atlas/>}/>
      <Route path='/Beshariq' element={<Beshariq/>} />
      <Route path='/paranda' element={<Paranda/>} />
      <Route path='/chorva' element={<Chorva/>} />
      <Route path='/turistik' element={<Turistik/>} />
      <Route path='/taqsim' element={<Taqsim/>} />
      <Route path='/oziq' element={<Oziq/>} />
    </Routes>
    </>
  )
}

export default App
