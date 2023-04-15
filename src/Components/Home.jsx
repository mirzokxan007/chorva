import React from 'react'
import carusel from '../../public/carusel.jpg'
import uzb  from '../../public/uzb.jpg'

const Home = () => {
  return (
    <>
    <div className='verb'>
      <img src={carusel} alt="" />
      <div className='container'>
      <img src={uzb} className="my-3" alt="" width={1400} height={700} />
      </div>
    </div>
    </>
  )
}

export default Home
