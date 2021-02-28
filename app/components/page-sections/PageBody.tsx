import React from 'react'
import styles from '../../styles/components/PageBody.module.scss'
import FeatureCard from '../FeatureCard'
import { Feature } from '../FeatureCard'
import AppSection from './AppSection'

console.log(styles)

const features: Feature[] = [
  {
    icon: '/icons/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    body:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
  },
  {
    icon: '/icons/icon-detailed-records.svg',
    title: 'Detailed Records',
    body:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
  },
  {
    icon: '/icons/icon-fully-customizable.svg',
    title: 'Fully Customizable',
    body:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
  },
]

const PageBody: React.FC = () => {
  return (
    <div className={styles['page-body--wrapper']}>
      <div className={styles['page-body']}>
        <AppSection />

        <section className={styles.statistics}>
          <h2 className={styles.title}>Advanced Statistics</h2>
          <p className={styles.subtitle}>
            Track how your links are performing across the web with our advanced statistics
            dashboard
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <FeatureCard key={`feature-${index}`} feature={feature}></FeatureCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default PageBody
