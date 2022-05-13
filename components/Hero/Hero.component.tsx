import { useEffect, useState } from 'react'
import { Movie } from '../../typings'
import { baseUrl } from '../../utils/baseURL'
import Image from 'next/image'

// Icons
import {FaPlay} from "react-icons/fa"
import {BsInfoCircle} from "react-icons/bs"

interface Props {
  netflixOriginals: Movie[]
}

const Hero = ({ netflixOriginals }: Props) => {
  const [newMovie, setNewMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setNewMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(newMovie)

  return (
    <>
      <div>
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
          <Image
            src={`${baseUrl}${
              newMovie?.backdrop_path || newMovie?.poster_path
            }`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-4 pt-20 md:px-6 md:pt-24 lg:px-20 lg:pt-28">
          <div className="text-2xl font-bold md:text-4xl lg:text-7xl ">
            <h1>{newMovie?.title || newMovie?.original_name}</h1>
          </div>
          <div className="pt-2 md:max-w-xl md:pt-3 md:text-lg lg:max-w-3xl lg:pt-4 lg:text-2xl">
            <p>{newMovie?.overview}</p>
          </div>
          <div className='py-2 md:py-4 flex gap-3'>
            <button className='flex items-center gap-2 bg-white text-black px-5 py-1 rounded md:rounded-md md:px-7 md:py-2 md:text-2xl'>
              <FaPlay />
              <span className='font-medium'>Play</span>
            </button>
            <button className='flex items-center gap-2 bg-black opacity-50 text-white px-5 py-1 rounded md:rounded-md md:px-7 md:py-2 md:text-2xl'>
              <BsInfoCircle />
              <span className='font-medium'>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero