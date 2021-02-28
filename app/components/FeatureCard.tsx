import React from 'react'
import styles from '../styles/components/PageBody.module.scss'

export interface Feature {
  icon: string
  title: string
  body: string
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className={styles.feature}>
      <div className={styles['feature-icon']}>
        <img src={feature.icon} alt="" />
      </div>
      <h3 className={styles['feature-title']}>{feature.title}</h3>

      <p className={styles['feature-body']}>{feature.body}</p>
    </div>
  )
}

export default FeatureCard
