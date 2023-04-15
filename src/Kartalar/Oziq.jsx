import React from 'react';
import oziq from '../../public/aziq.jpg'
import gosht from '../../public/gosht.jpg'
import kartowka from '../../public/kartowka.jpg'
import bugdoy from '../../public/bugdoy.jpg'

const Oziq = () => {
  return (
    <div className='container'>
      <img src={oziq} className="my-3" alt="" width={1400} height={700} />
      <img src={gosht} className="my-3" alt="" width={1400} height={700} />
      <img src={kartowka} className="my-3" alt="" width={1400} height={700} />
      <img src={bugdoy} className="my-3" alt="" width={1400} height={700} />
    </div>
  )
}

export default Oziq
