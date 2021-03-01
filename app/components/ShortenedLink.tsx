import React, { useEffect, useState } from 'react'
import styles from '../styles/components/ShortenedLink.module.scss'
import BaseButton from './buttons/BaseButton'

export interface Link {
  url: string
  shortenedUrl: string
}

// A fallback for IE
const copyToClipboardFallback = (link: string): boolean => {
  const textArea = document.createElement('textarea')

  // prevent from showing
  textArea.style.position = 'fixed'
  textArea.style.top = '-100px'
  textArea.style.left = '-100px'
  textArea.style.width = '5px'
  textArea.style.height = '5px'

  textArea.value = link

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  let successful: boolean

  try {
    successful = document.execCommand('copy')
  } catch (err) {
    successful = false
  }

  document.body.removeChild(textArea)
  return successful
}

// The modern solution with >80% browser support
const copyToClipboard = async (link: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(link)
    return true
  } catch (err) {
    return false
  }
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
  const [copied, setCopied] = useState(false)

  const handleCopy = async (): Promise<void> => {
    let successful: boolean
    if (!navigator.clipboard) {
      successful = copyToClipboardFallback(link.shortenedUrl)
    } else successful = await copyToClipboard(link.shortenedUrl)

    if (successful) {
      setCopied(true)
    }
  }

  useEffect(() => {
    // reset "copied" after 3000ms
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 3000)
    return (): void => {
      clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div className={styles['link-card']}>
      <p className={styles.url}>{link.url}</p>
      <a href={link.shortenedUrl} className={styles['shortened-url']}>
        {link.shortenedUrl}
      </a>
      <BaseButton sm className={styles['copy-button']} onClick={handleCopy} alt={copied}>
        {copied ? 'Copied' : 'Copy'}
      </BaseButton>
    </div>
  )
}

export default ShortenedLink
