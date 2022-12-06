import React from 'react'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import useAuth from "../hooks/useAuth";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const {logout} = useAuth()
    useEffect(() => {
    const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/teatrone.appspot.com/o/items%2Flogo.png?alt=media&token=94b4bb1d-b128-4338-9362-3354a22dbdbb"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

         <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6" />
            {/*<Link href="/account">*/}
            <img
                onClick={logout}
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded"
            />
            {/*</Link>*/}
        </div>
    </header>
  )
}

export default Header