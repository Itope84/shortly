import React from 'react'
import buttonStyles from '../../styles/components/Button.module.scss'
import Loading from '../../assets/svgs/loading.svg'

interface ButtonProps {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  sm?: boolean
  alt?: boolean
  loading?: boolean
  children?: React.ReactNode

  onClick?: () => void
}

const BaseButton: React.FC<ButtonProps> = ({
  className = '',
  sm = false,
  alt = false,
  type = 'button',
  loading = false,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        buttonStyles.button,
        sm ? buttonStyles['button__sm'] : '',
        alt ? buttonStyles['button__alt'] : '',
        className,
      ].join(' ')}
      disabled={loading}
    >
      {loading ? <Loading /> : children}
    </button>
  )
}

export default BaseButton
