'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()

  return (
    <>
      <div className='flex md:flex-row justify-between p-2 md:p-4'>
        <p className='text-xl'>
          KENNETH TSO
        </p>
        <nav className='hidden md:flex'>
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
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ?<span>&#10005;</span> : <span>&#9776;</span>}
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
