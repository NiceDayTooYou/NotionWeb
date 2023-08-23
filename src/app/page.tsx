import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold">Welcome To My Page</h1>
      <p className="text-center" style={{ color: 'red', fontSize: '30px' }}>
        和美好不期而遇❤️
      </p> {/* 添加一个闭合标签 */}
      <h2 className="mt-4 text-center text-2xl font-semibold">How Are You Today</h2>
      <p className="text-center" style={{ color: 'green', fontSize: '30px' }}>
        热爱生活，知足常乐👻
      </p>
      <h2 className="mt-4 text-center text-2xl font-semibold">Enjoy Your Time</h2>
      <p className="text-center" style={{ color: 'blue', fontSize: '30px' }}>
        昨天已经成为历史
        明天却是个谜团
        而今天是天赐的礼物
        要像珍惜礼物那样珍惜今天
      </p>
    </div>
  );
}
