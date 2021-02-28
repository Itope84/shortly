import React, { ChangeEvent } from 'react'
import styles from '../styles/components/Shorten.module.scss'
import BaseButton from './buttons/BaseButton'
import TextInput from './TextInput'

const Shorten: React.FC = () => {
  const [link, setLink] = React.useState('')
  const [linkError, setLinkError] = React.useState<null | string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    //   validate link
    if (!link) {
      setLinkError('Please add a link')
    } else {
      setLinkError(null)
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
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <TextInput
          value={link}
          onChange={updateLink}
          error={linkError}
          placeholder="Shorten a link here..."
          className={styles.input}
        ></TextInput>
        <div className={styles['button-wrapper']}>
          <BaseButton type="submit" className={styles.button}>
            Shorten It!
          </BaseButton>
        </div>
      </form>
    </div>
  )
}

export default Shorten
