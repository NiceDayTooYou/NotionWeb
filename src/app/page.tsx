import React from 'react';

import Image from "next/image";

const urlimage = "/profile.png";

export default function HomePage() {
  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold">Welcome To My Page</h1> 
      <p className="text-center" style={{ color: '#f05561', fontSize: '30px' }}>
        和美好不期而遇❤️      </p> 
      <h2 className="mt-4 text-center text-2xl font-semibold">How Are You Today</h2>
      <p className="text-center" style={{ color: '#00d457', fontSize: '30px' }}>
        热爱生活，知足常乐👻
      </p>
      <h2 className="mt-4 text-center text-2xl font-semibold">Enjoy Your Time</h2>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        昨天已经成为历史      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        明天却是个谜团      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        而今天是天赐的礼物      </p>
      <p className="text-center" style={{ color: '#000000', fontSize: '30px' }}>
        要像珍惜礼物那样珍惜今天      </p>

      {/* Insert the Image component here */}
      <div className='container mx-auto py-8'>
        <Image          src={urlimage}
          width={200}
          height={500}
          alt="Profil"
          className="rounded-full h-48 mx-auto p-4"
        />
      </div>
    </div>
  );
}
