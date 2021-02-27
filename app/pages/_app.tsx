import '../styles/base.scss';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

let str;
console.log(str);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
