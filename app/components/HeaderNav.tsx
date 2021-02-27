import styles from '../styles/components/Header.module.scss'
import * as React from 'react'
import LinkButton from './buttons/LinkButton'

console.log(styles)

const HeaderNav: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/images/logo.svg" alt="Shortly Logo" className={styles.logo} />

      <nav className={`${styles.nav} ${styles['nav__main']}`}>
        <ul>
          <li className={styles['nav-item']}>
            <a href="#">Features</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#">Pricing</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>

      <nav className={`${styles.nav} ${styles['nav__secondary']}`}>
        <ul>
          <li className={styles['nav-item']}>
            <a href="#">Login</a>
          </li>
          <li className={styles['signup']}>
            <LinkButton href="#">Sign Up</LinkButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
