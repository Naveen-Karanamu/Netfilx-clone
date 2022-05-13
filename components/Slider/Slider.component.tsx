import { Movie } from '../../typings'

// Icons
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import Template from '../Template/Template.component'

interface Props {
  title: string
  movies: Movie[]
}

const Slider = ({ title, movies }: Props) => {
  return (
    <>
      <div>
        <div className="cursor-pointer text-sm font-semibold text-gray-300 transition duration-200 hover:text-white md:text-xl lg:py-1 lg:text-xl">
          <h1>{title}</h1>
        </div>
        <div className="group flex items-center relative">
          <IoChevronBackSharp className="md:h-8 md:w-8 h-6 w-6 cursor-pointer lg:opacity-0 transition duration-75 group-hover:opacity-100 absolute left-3 z-10" />
          <div className='flex overflow-x-scroll gap-1 py-2 md:py-4 lg:py-4 md:gap-2 scrollbar-hide items-center cursor-pointer'>
            {movies.map((movie) => (
              <Template movies={movie} key={movie.id} />
            ))}
          </div>
          <IoChevronForwardOutline className="md:h-8 md:w-8 h-6 w-6 cursor-pointer lg:opacity-0 transition duration-75 group-hover:opacity-100 absolute right-3" />
        </div>
      </div>
    </>
  )
}

export default Slider
