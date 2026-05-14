'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './themeProvider';

const NAV_LINKS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Resume for Humans',
    href: '/huresume'
  },
  {
    name: 'Resume for Bots',
    href: '/paresume'
  },
  {
    name: 'Cover Letter',
    href: '/coverLetter'
  },
  {
    name: 'SDI',
    href: '/sdi'
  },
  {
    name: 'Wonderlic',
    href: '/wonderlic'
  },
  {
    name: 'Testimonials',
    href: '/testimonials'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const currentPathStyles = 'after:bg-white after:absolute after:h-0.5 after:w-full after:bottom-0 after:left-0 cursor-pointer'
const otherPathStyles = 'after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer'

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <>
      <div className='flex md:flex-row justify-between p-2 md:p-4'>
        <p className='text-xl'>
          KENNETH TSO
        </p>
        <nav className='hidden md:flex items-center'>
          {NAV_LINKS.map(link => {
            const { name, href } = link
            return <Link
              key={name}
              href={href}
              className='ml-8 relative'
            >
              <span
                className={pathname === href ? currentPathStyles : otherPathStyles}
              >
                {name}
              </span>
            </Link>
          })}
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className='ml-8 opacity-70 hover:opacity-100 transition-opacity'
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className='opacity-70 hover:opacity-100 transition-opacity'
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>

      </div>
      <div
        className={`md:hidden flex flex-col items-end
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-60 opacity-100 p-2" : "max-h-0 opacity-0"}`
        }
      >
        {NAV_LINKS.map(link => {
          const { name, href } = link
          return <Link
            key={name}
            href={href}
          >
            <span
              className={`${pathname === href ? "underline" : ""}`}
            >
              {name}
            </span>
          </Link>
        })}
      </div>
    </>
  );
}
