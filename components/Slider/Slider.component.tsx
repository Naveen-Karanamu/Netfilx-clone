import { Movie } from '../../typings'

interface Props {
  title: string
  movie: Movie[]
}

const Slider = ({ title, movie }: Props) => {
  return (
    <>
      <div>
          <div className='text-sm md:text-xl lg:text-xl font-semibold lg:py-2'>
              <h1>{title}</h1>
          </div>
          <div></div>
      </div>
    </>
  )
}

export default Slider
