import '../src/styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const audio = new Audio('/studying.mp3');
    audio.play();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
