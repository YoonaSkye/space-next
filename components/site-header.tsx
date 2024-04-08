'use client'

import { LINKS, SPACE_NAME } from '@/constants'
import Link from 'next/link'

import { useNavActive } from '@/hooks/useNavActive'
import ThemeMode from './ThemeMode'
import MobileNav from './mobile-nav'

export default function SiteHeader() {
  const [active] = useNavActive()

  return (
    <header className="flex sm:justify-between items-center mb-20">
      <Link href="/" className="text-xl flex-1 sm:flex-none">
        {SPACE_NAME}
      </Link>

      <nav className="hidden sm:inline-flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
        {Object.entries(LINKS).map((link) => {
          const className = `py-3 px-5 transition-transform duration-200 hover:text-cyan-500 ${link[0] === active ? 'text-cyan-500' : ''}`
          return (
            <Link key={link[0]} href={link[1]} className={className}>
              {link[0]}
            </Link>
          )
        })}
      </nav>
      <ThemeMode />
      <MobileNav />
    </header>
  )
}
