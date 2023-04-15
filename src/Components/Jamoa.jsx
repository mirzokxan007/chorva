import '../../styles/css/pattern/jamoa.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Jamoa = () => {
  return (
    <>

    <div className='container fother'>
      <div className="card1 py-2 d-flex justify-content-between">
       <h2> <Link className='card_1 ' to="/turistik">Farg'ona viloyati Turistik</Link><i class="fa-solid fa-right-long"></i></h2>
       </div>
       <div className="card1 py-2 d-flex justify-content-between">
       <h2> <Link className='card_1 ' to="/taqsim">Farg'ona viloyati  tumanlar taqsimlanishi</Link><i class="fa-solid fa-right-long"></i></h2>
       </div>
       <div className="card1 py-2 d-flex justify-content-between">
       <h2> <Link className='card_1 ' to="/oziq">Farg'ona viloyati oziq-ovqat maxsulotlari</Link><i class="fa-solid fa-right-long"></i></h2>
       </div>

    </div>
    </>
  )
}

export default Jamoa
