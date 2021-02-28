import { ChangeEvent } from 'react'
import styles from '../styles/components/TextInput.module.scss'

const TextInput: React.FC<{
  className: string
  placeholder?: string
  error?: string | null
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}> = ({ className, placeholder, value, error, onChange }) => {
  return (
    <div
      className={[styles['input-wrapper'], className, error ? styles['has-error'] : ''].join(' ')}
    >
      <input value={value} onChange={onChange} type="text" placeholder={placeholder} />
      {!!error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default TextInput
