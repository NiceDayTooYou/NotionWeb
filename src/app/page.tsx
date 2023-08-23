import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold">Welcome to my page</h1>
      <p className="text-center" style={{ color: 'red', fontSize: '30px' }}>
        "和美好不期而遇"
      </p> {/* 添加一个闭合标签 */}
      <h2 className="mt-4 text-center text-2xl font-semibold">How are you today</h2>
      <p className="text-center" style={{ color: 'green', fontSize: '30px' }}>
        热爱生活，知足常乐。
      </p>
      <h2 className="mt-4 text-center text-2xl font-semibold">Enjoy your time</h2>
      <p className="text-center" style={{ color: 'blue', fontSize: '30px' }}>
        昨天已经成为了历史，明天却是个谜团，而今天是上天赐予的礼物，要像珍惜礼物那样珍惜今天.
      </p>
    </div>
  );
}
