import React from 'react'
import buttonStyles from '../../styles/components/Button.module.scss'

interface ButtonProps {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  sm?: boolean
  children?: React.ReactNode
}

const BaseButton: React.FC<ButtonProps> = ({
  className = '',
  sm = false,
  type = 'button',
  children,
}) => {
  return (
    <button
      type={type}
      className={[buttonStyles.button, sm ? buttonStyles['button__sm'] : '', className].join(' ')}
    >
      {children}
    </button>
  )
}

export default BaseButton
