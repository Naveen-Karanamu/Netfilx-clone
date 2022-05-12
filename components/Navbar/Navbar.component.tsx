// Livraries
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Icons
import { FaBell } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
  const [isScrolled, SetIsScriolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) SetIsScriolled(true)
      else SetIsScriolled(false)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className={
          isScrolled
            ? 'fixed top-0 z-50 flex h-10 w-full items-center justify-between bg-[#141414] px-4 py-4 md:px-6 md:py-5 lg:px-10'
            : 'fixed top-0 z-50 flex h-10 w-full items-center justify-between px-4 py-8 md:px-6 lg:px-10 lg:py-10'
        }
      >
        <div className="flex items-center gap-4 md:gap-10">
          <div className="h-7 w-auto">
            <img
              src="https://rb.gy/ulxxee"
              width={100}
              height={100}
              className="h-full w-full cursor-pointer object-contain"
            />
          </div>
          <div className="md:hidden">Browse</div>
          <div className="hidden gap-4 md:flex">
            <span className="text-sm hover:text-gray-400">Home</span>
            <span className="text-sm text-gray-400 hover:text-white">TV Shows</span>
            <span className="text-sm text-gray-400 hover:text-white">Movies</span>
            <span className="text-sm text-gray-400 hover:text-white">New & Popular</span>
            <span className="text-sm text-gray-400 hover:text-white">My List</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <IoSearch className="h-6 w-6 text-white" />
          </div>
          <div className="hidden text-sm text-gray-300 lg:block">Kids</div>
          <div>
            <FaBell className="h-5 w-5 text-white" />
          </div>
          <div>
            <Link href="/account">
              <img
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
