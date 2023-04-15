import React from 'react'
import madaniy from '../../public/madaniy.jpg'
import turistik from '../../public/turistik.jpg'
import iqtisod from '../../public/iqtisod.jpg'
import tibiy from '../../public/tibiy.jpg'

const Turistik = () => {
  return (
    <div className='container'>
      <img src={turistik} className="my-3" alt="" width={1400} height={700} />
      <img src={iqtisod} className="my-3" alt="" width={1400} height={700} />
      <img src={madaniy} className="my-3" alt="" width={1400} height={700} />
      <img src={tibiy} className="my-3" alt="" width={1400} height={700} />
    </div>
  )
}

export default Turistik
