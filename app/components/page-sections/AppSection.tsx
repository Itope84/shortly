import React from 'react'
import Shorten from '../Shorten'
import ShortenedLink from '../ShortenedLink'

import styles from '../../styles/components/AppSection.module.scss'

const AppSection: React.FC = () => {
  return (
    <section className={styles['app-section']}>
      <Shorten></Shorten>
      {/* past shortened links */}
      <div className={styles.links}>
        <ShortenedLink link={{ url: 'https://google.com', shortenedUrl: 'str' }}></ShortenedLink>
        <ShortenedLink link={{ url: 'https://google.com', shortenedUrl: 'str' }}></ShortenedLink>
        <ShortenedLink link={{ url: 'https://google.com', shortenedUrl: 'str' }}></ShortenedLink>
      </div>
    </section>
  )
}

export default AppSection
