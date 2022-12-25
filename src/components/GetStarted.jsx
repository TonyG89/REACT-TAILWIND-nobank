import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg bg-primary w-[100%] h-[100%] rounded-full font-poppins font-medium text-[18px] leading-6`}>
        <div className={`${styles.flexStart} flex-row `}>
          <span className={'leading-6 mr-2 text-gradient text-center'}>Get</span>
          <img src={arrowUp} alt="arrow" className='w-6 h-6 object-contain' />
        </div>
        <span className='text-gradient'>Started</span>
      </div>
    </div>
  )
}

export default GetStarted