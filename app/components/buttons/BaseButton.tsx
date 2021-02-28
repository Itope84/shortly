import React from 'react'
import buttonStyles from '../../styles/components/Button.module.scss'

interface ButtonProps {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  children?: React.ReactNode
}

const BaseButton: React.FC<ButtonProps> = ({ className = '', type = 'button', children }) => {
  return (
    <button type={type} className={[buttonStyles.button, className].join(' ')}>
      {children}
    </button>
  )
}

export default BaseButton
