import React, { ChangeEvent, useState } from 'react'
import styles from '../styles/components/Shorten.module.scss'
import shorten from '../utils/api'
import BaseButton from './buttons/BaseButton'
import TextInput from './TextInput'
import { Link, ShortenedUrl } from './ShortenedLink'

const Shorten: React.FC<{ addLink: (link: Link) => void }> = ({ addLink }) => {
  const [link, setLink] = useState('')
  const [linkError, setLinkError] = React.useState<null | string>('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    //   validate link
    if (!link) {
      setLinkError('Please add a link')
    } else {
      setLinkError(null)

      // API request
      setLoading(true)
      const result = await shorten(link)

      if (result.error) {
        setLinkError(result.error)
      }

      if (result.shortenedUrl) {
        addLink(new ShortenedUrl(link, result.shortenedUrl))
        setLink('')
      }
      setLoading(false)
    }
  }

  const updateLink = (e: ChangeEvent<HTMLInputElement>): void => {
    setLink(e.target.value)
    //   in case the error had been activated previously, unset when text changes
    if (e.target.value) {
      setLinkError(null)
    }
  }

  return (
    <div className={styles['shorten-container']}>
      <form action="#" method="POST" onSubmit={handleSubmit} id="shortenForm">
        <TextInput
          value={link}
          onChange={updateLink}
          error={linkError}
          placeholder="Shorten a link here..."
          className={styles.input}
        ></TextInput>
        <div className={styles['button-wrapper']}>
          <BaseButton type="submit" className={styles.button} loading={loading}>
            Shorten It!
          </BaseButton>
        </div>
      </form>
    </div>
  )
}

export default Shorten
