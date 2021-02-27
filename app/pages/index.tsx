import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeaderNav from '../components/HeaderNav';
import * as React from 'react';

let str;
console.log(str);

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortly</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <HeaderNav />

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;