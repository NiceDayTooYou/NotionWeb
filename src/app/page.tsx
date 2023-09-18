import React, { useEffect, useRef } from 'react';

export default function HomePage() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold">Welcome To My Page</h1> 
      <p className="text-center" style={{ color: '#f05561', fontSize: '30px' }}>
        和美好不期而遇❤️
      </p> 
      <h2 className="mt-4 text-center text-2xl font-semibold">How Are You Today</h2>
      <p className="text-center" style={{ color: '#00d457', fontSize: '30px' }}>
        热爱生活，知足常乐👻
      </p>
      <h2 className="mt-4 text-center text-2xl font-semibold">Enjoy Your Time</h2>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        昨天已经成为历史
      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        明天却是个谜团
      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        而今天是天赐的礼物
      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        要像珍惜礼物那样珍惜今天
      </p>
      <audio ref={audioRef} src="/studying.mp3" autoPlay />
    </div>
  );
}
