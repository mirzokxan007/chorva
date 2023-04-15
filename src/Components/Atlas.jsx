import React from 'react'
import '../../styles/css/pattern/karta.css';
import rasm from '../../public/karta.png';
import {Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

const Atlas = () => {
  return (
    <div className='container' >
         <header>
          <h1 class="legor py-3">
            Фарғона вилоятида қорамолчилик фермер хўжаликларининг <br/> 2021 йил бўлган
            маълумот.
          </h1>
        </header>
         <div class="karta container">
        <img  class="drop2" src={rasm} alt="" />
          <h1 class="wref"><Link to='/beshariq' ><i class="fa-solid fa-location-dot"></i>Бешарик </Link></h1>
          <h1 class="wref_2"><a href="./page_2/furqat.html" ><i class="fa-solid fa-location-dot"></i >Фуркат </a></h1>
      </div>
    

    </div>
  )
}

export default Atlas
