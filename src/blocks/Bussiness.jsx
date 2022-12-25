import React from 'react'
import { features } from '../const'
import styles, { layout } from '../style'
import Button from '../components/Button'

const FeatureCard = ({ id, icon, title, content }) => (
  <div className={`flex text-white p-6 rounded-[20px] cursor-default ${id !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`} >
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img className={`w-[50%] h-[50%] object-contain`} src={icon} alt="icon" />
    </div>
    <div className='flex flex-1 flex-col ml-3 font-poppins leading-6 '>
      <h4 className=' font-semibold text-white text-[18px] mb-1'>{title}</h4>
      <p className=' font-normal text-dimWhite text-[16px] mb-1'>{content}</p>
    </div>
  </div>
)

const Bussiness = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' />we’ll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map(feature => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
)

export default Bussiness