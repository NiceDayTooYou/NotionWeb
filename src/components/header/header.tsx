import React, { Component, useEffect } from 'react'; // 导入 useEffect

import Link from 'next/link';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [
  { path: 'blog', name: 'Serendipity' },
  { path: 'about', name: 'About', url: 'https://liyong.online' }, // 添加 url 属性
];

export default function Header() {
  useEffect(() => {
    const audio = new Audio('/studying.mp3'); // 替换成你的音乐文件路径
    audio.loop = true; // 设置音乐循环播放

    audio.play(); // 播放音乐

    // 在组件卸载时停止音乐，以防止内存泄漏
    return () => {
      audio.pause(); // 停止音乐
    };
  }, []); // 空依赖数组表示仅在组件挂载和卸载时运行

  return (
    <nav className="flex flex-col justify-between py-12 md:flex-row">
      <Link href="/" className="self-start md:self-auto">
        <h1 className="text-3xl font-bold">Li Yong</h1>
      </Link>
      <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              {/* Check if the item has a URL, if yes, use an external link */}
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                <NavLink path={item.path}>{item.name}</NavLink>
              )}
            </li>
          ))}
        </ul>
        <div className="absolute right-[10vw] top-12 md:static">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
