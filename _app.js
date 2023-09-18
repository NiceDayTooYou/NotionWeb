import '../src/styles/globals.css';
import { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }) {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playAudio}>Play Audio</button>
      <audio ref={audioRef} src="/studying.mp3" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
