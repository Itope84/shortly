import React, { useEffect, useState } from 'react'
import Shorten from '../Shorten'
import ShortenedLink, { Link, ShortenedUrl } from '../ShortenedLink'

import styles from '../../styles/components/AppSection.module.scss'

const AppSection: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    const linksStr = localStorage.getItem('links') || '[]'

    // reformat each link just to avoid unforeseen discrepancies.
    const linksJson = JSON.parse(linksStr)

    console.log(linksJson)

    if (Array.isArray(linksJson)) {
      setLinks(ShortenedUrl.fromJsonList(linksJson))
    }
  }, [])

  useEffect(() => {
    // store in localstorage
    const linksJson = JSON.stringify(links)
    localStorage.setItem('links', linksJson)
  }, [links])

  const addShortenedLink = (link: Link): void => {
    setLinks([...links, link])
  }

  return (
    <section className={styles['app-section']}>
      <Shorten addLink={addShortenedLink}></Shorten>
      {/* past shortened links */}
      <div className={styles.links}>
        {links.map((link, index) => (
          <ShortenedLink key={'shortened' + index} link={link}></ShortenedLink>
        ))}
      </div>
    </section>
  )
}

export default AppSection
