import React from 'react'
import styles from '../styles/components/ShortenedLink.module.scss'
import BaseButton from './buttons/BaseButton'

interface Link {
  url: string
  shortenedUrl: string
}

const ShortenedLink: React.FC<{ link: Link }> = ({ link }) => {
  return (
    <div className={styles['link-card']}>
      <p className={styles.url}>{link.url}</p>
      <a href={link.shortenedUrl} className={styles['shortened-url']}>
        {link.shortenedUrl}
      </a>
      <BaseButton sm className={styles['copy-button']}>
        Copy
      </BaseButton>
    </div>
  )
}

export default ShortenedLink
