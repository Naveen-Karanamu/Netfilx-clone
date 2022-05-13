import { useEffect, useState } from 'react'
import { Movie } from '../../typings'
import { baseUrl } from '../../utils/baseURL'
import Image from 'next/image'

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
        <div className="px-4 pt-20 md:pt-24 md:px-6">
          <div className='text-2xl font-bold md:text-4xl'>
            <h1>{newMovie?.title || newMovie?.original_name}</h1>
          </div>
          <div className='pt-2 md:pt-3 md:text-lg'>
            <p>{newMovie?.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
