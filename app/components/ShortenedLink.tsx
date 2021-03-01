import React from 'react'
import styles from '../styles/components/ShortenedLink.module.scss'
import BaseButton from './buttons/BaseButton'

export interface Link {
  url: string
  shortenedUrl: string
}

export class ShortenedUrl implements Link {
  url: string
  shortenedUrl: string

  constructor(url: string, shortenedUrl: string) {
    this.url = url
    this.shortenedUrl = shortenedUrl
  }

  static fromJsonList(jsonList: { url: string; shortenedUrl: string }[]): ShortenedUrl[] {
    return jsonList.map((json) => new ShortenedUrl(json.url, json.shortenedUrl))
  }
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
