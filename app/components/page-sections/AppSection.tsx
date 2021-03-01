import React, { useState } from 'react'
import Shorten from '../Shorten'
import ShortenedLink, { Link } from '../ShortenedLink'

import styles from '../../styles/components/AppSection.module.scss'

const AppSection: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([])

  const addShortenedLink = (link: Link): void => {
    setLinks([...links, link])
  }

  return (
    <section className={styles['app-section']}>
      <Shorten addLink={addShortenedLink}></Shorten>
      {/* past shortened links */}
      <div className={styles.links}>
        {links.map((link) => (
          <ShortenedLink link={link}></ShortenedLink>
        ))}
      </div>
    </section>
  )
}

export default AppSection
