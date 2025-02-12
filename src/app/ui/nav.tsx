'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    name: 'Contact',
    href: '/contact'
  }
]

const currentPathStyles = 'after:bg-white after:absolute after:h-0.5 after:w-full after:bottom-0 after:left-0 cursor-pointer'
const otherPathStyles = 'after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer'

export default function Nav() {
  const pathname = usePathname()

  return (
    <div className='flex flex-row justify-between p-4'>
      <p className='text-xl'>
        KENNETH TSO
      </p>
      <nav >
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
    </div>
  );
}
