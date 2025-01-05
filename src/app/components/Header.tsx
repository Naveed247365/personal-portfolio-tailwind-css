'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full top-0 left-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center space-x-6">
          <li><Link href="/" className={`font-semibold hover:text-purple-600 transition-colors ${pathname === '/' ? 'text-purple-600' : 'text-gray-800'}`}>Home</Link></li>
          <li><Link href="/About" className={`font-semibold hover:text-purple-600 transition-colors ${pathname === '/About' ? 'text-purple-600' : 'text-gray-800'}`}>About</Link></li>
          <li><Link href="/Projects" className={`font-semibold hover:text-purple-600 transition-colors ${pathname === '/Projects' ? 'text-purple-600' : 'text-gray-800'}`}>Projects</Link></li>
          <li><Link href="/Skills" className={`font-semibold hover:text-purple-600 transition-colors ${pathname === '/Skills' ? 'text-purple-600' : 'text-gray-800'}`}>Skills</Link></li>
          <li><Link href="/Contact" className={`font-semibold hover:text-purple-600 transition-colors ${pathname === '/Contact' ? 'text-purple-600' : 'text-gray-800'}`}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}