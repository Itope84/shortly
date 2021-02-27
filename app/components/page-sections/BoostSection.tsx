import React from 'react'
import styles from '../../styles/components/Boost.module.scss'
import LinkButton from '../buttons/LinkButton'

const BoostSection: React.FC = () => {
  return (
    <section className={styles['boost-section']}>
      <div className={styles['content']}>
        <h2 className={styles['cta-text']}>Boost your links today</h2>
        <LinkButton href="#">Get Started</LinkButton>
      </div>
    </section>
  )
}

export default BoostSection
