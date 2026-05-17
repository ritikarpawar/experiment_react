import React from 'react'
import HeroText from'./HeroText'
import Arrow from './Arrow'
const Leftcontent = () => {
  return (
    <div className='h-full flex justify-between w-1/4 flex-col'>
      <HeroText/>
      <Arrow/>
    </div>
  )
}

export default Leftcontent
