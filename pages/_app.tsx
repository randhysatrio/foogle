import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Foogle | F for fantastic!</title>
        <meta name="description" content="Big G aint got shiz on me"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
