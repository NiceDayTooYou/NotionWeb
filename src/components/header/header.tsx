
import Link from 'next/link';
import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

const NAV_ITEMS = [
  { path: 'blog', name: 'Serendipity' },
  { path: 'about', name: 'About', url: 'https://liyong.online' },
];

export default function Header() {
  useEffect(() => {
    // 在组件加载后，自动播放音乐    const audioElement = document.getElementById('myAudio') as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
    }
  }, []);

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
      </div>
      {/* 隐藏音频播放器 */}
      <audio id="myAudio" autoPlay controls={false} style={{ display: 'none' }}>
        <source src="studying.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="absolute right-[10vw] top-12 md:static">
        <ThemeToggle />
      </div>
    </nav>
  );
}
