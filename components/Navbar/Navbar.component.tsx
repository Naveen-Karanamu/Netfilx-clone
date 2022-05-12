// Livraries
import Link from 'next/link'

// Icons
import { FaBell } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
  return (
    <>
      <div className="flex h-10 w-full items-center justify-between">
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
          <div className='hidden md:flex gap-4'>
            <span className='text-sm'>Home</span>
            <span className='text-sm text-gray-400'>TV Shows</span>
            <span className='text-sm text-gray-400'>Movies</span>
            <span className='text-sm text-gray-400'>New & Popular</span>
            <span className='text-sm text-gray-400'>My List</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className='hidden md:block'>
            <IoSearch className='h-6 w-6 text-white'/>
          </div>
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
