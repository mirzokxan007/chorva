import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='bg-dark heade'>
      <div className=' d-flex container py-3  justify-content-between '>
          <div className="w-25 logo">
              <img src="/vite.svg" alt="" />
          </div>
          <div className="links">
              <ul className='d-flex  justify-content-around'>
                <li className='mx-3'><Link className='link' to="/" >Bosh saxifa</Link></li>
                <li className='mx-3'><Link className='link' to="/atlas" >Ma'lumotlar</Link></li>
                <li className='mx-3' ><Link className='link' to="/jamoa" >Xaritalar</Link></li>
                <li className='mx-3'>
                  <div class="dropdown doun  ">
      <li class=" btn_1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Kompronovka
      </li>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to="/paranda">Paranda va chorva</Link></li>
        <li><Link class="dropdown-item" to="/chorva">Resuslar</Link></li>
      </ul>
     
                  </div>
                </li>
                <li className='mx-3'>
                  <select name="language" class="nav">
                <option value="en">Eng</option>
                <option value="ru">Ru</option>
                <option value="uzb">Uzb</option>
                  </select> 
                </li>
              </ul>
          </div> 
          
    
      </div>
    </div>
    </>
  )
}

export default Header
