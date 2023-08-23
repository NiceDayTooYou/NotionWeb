import Link from 'next/link';

import NavLink from '@/components/header/nav-link';
import ThemeToggle from '@/components/theme-toggle';

import { Route, Switch } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/blog', name: 'Serendipity' },
  { path: '/about', name: 'About' },
];

function App() {
  return (
    <div>
      <nav>
        {navList.map(navItem => (
          <Link to={navItem.path}>{navItem.name}</https://notion-next-vdb7.vercel.app/>
        ))}
      </nav>
      <Switch>
        {navList.map(navItem => (
          <Route key={navItem.name} path={navItem.path} component={navList}>
          </route>
        ))}
      </Switch>
    </div>
  );
}

export default App;

export default function Header() {
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
              <NavLink path={item.path}>{item.name}</NavLink>
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
