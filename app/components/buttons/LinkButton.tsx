import * as React from 'react'
import buttonStyles from '../../styles/components/Button.module.scss'

interface ButtonProps {
  href: string
  className?: string
  children?: React.ReactNode
}

const LinkButton: React.FC<ButtonProps> = ({ href, className, children }) => {
  return (
    <a
      href="href"
      className={`${buttonStyles.button} ${buttonStyles['button--link']}  ${buttonStyles['button--link__sm']} ${className}`}
    >
      {children}
    </a>
  )
}

export default LinkButton
