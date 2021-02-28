import React from 'react'
import heroStyles from '../../styles/components/Hero.module.scss'
import LinkButton from '../buttons/LinkButton'

const Hero: React.FC = () => {
  return (
    <div className={heroStyles['hero--wrapper']}>
      <div className={heroStyles.illustration}></div>
      <div className={heroStyles.hero}>
        <div className={heroStyles['hero-content']}>
          <h1 className={heroStyles.header}>More than just shorter links</h1>

          <p className={heroStyles.subtitle}>
            Build your brand's recognition and get detailed insights on how your links are
            performing
          </p>

          <LinkButton href="#">Get Started</LinkButton>
        </div>
      </div>
    </div>
  )
}

export default Hero
