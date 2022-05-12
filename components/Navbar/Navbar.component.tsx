// Livraries
import Link from 'next/link'

// Icons
import { FaBell } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="flex h-10 w-full items-center justify-between">
        <div className="flex items-center gap-4 ">
          <div className="h-7 w-auto">
            <img
              src="https://rb.gy/ulxxee"
              width={100}
              height={100}
              className="h-full w-full cursor-pointer object-contain"
            />
          </div>
          <div>Browse</div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <FaBell className='text-white w-5 h-5'/>
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
