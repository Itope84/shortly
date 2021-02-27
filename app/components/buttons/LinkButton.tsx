import * as React from 'react'
import buttonStyles from '../../styles/components/Button.module.scss'

interface ButtonProps {
  href: string
  className?: string
  sm?: boolean
  children?: React.ReactNode
}

const LinkButton: React.FC<ButtonProps> = ({ href, className = '', sm = false, children }) => {
  return (
    <a
      href={href}
      className={[
        buttonStyles.button,
        buttonStyles['button--link'],
        className,
        sm ? buttonStyles['button--link__sm'] : '',
      ].join(' ')}
    >
      {children}
    </a>
  )
}

export default LinkButton
