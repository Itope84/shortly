import React from 'react'
import styles from '../../styles/components/Footer.module.scss'
import Logo from '../../assets/svgs/logo.svg'
import FacebookIcon from '../../assets/svgs/icon-facebook.svg'
import TwitterIcon from '../../assets/svgs/icon-twitter.svg'
import PinterestIcon from '../../assets/svgs/icon-pinterest.svg'
import InstagramIcon from '../../assets/svgs/icon-instagram.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer--wrapper']}>
      <div className={styles.footer}>
        <div className={styles['logo-section']}>
          <a href="/">
            <Logo className={styles.logo} />
          </a>
        </div>
        <div className={styles['links-section']}>
          <div className={styles.column}>
            <h4>Features</h4>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </div>
          <div className={styles.column}>
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Out Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={styles.social}>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <PinterestIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
