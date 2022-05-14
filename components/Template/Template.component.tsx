import { Movie } from '../../typings'
import Image from 'next/image'

interface Props {
  movies: Movie
}

const Template = ({ movies }: Props) => {
  return (
    <>
      <div className="relative duration-300 lg:ease-out lg:hover:scale-105">
        <div className="transision relative h-28 min-w-[180px] md:h-32 md:min-w-[240px] ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              movies.backdrop_path || movies.poster_path
            }`}
            className="rounded-sm object-cover md:rounded"
            layout="fill"
          />
        </div>
          <p className='pt-1 truncate max-w-[240px]'>{movies.title||movies.original_name}</p>
      </div>
    </>
  )
}

export default Template
