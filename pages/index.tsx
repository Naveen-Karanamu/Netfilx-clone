import Head from 'next/head'
import Image from 'next/image'

// components
import Navbar from '../components/Navbar/Navbar.component'
import requests from '../utils/requests'
import {Movie} from '../typings'
import Hero from '../components/Hero/Hero.component'
import Slider from '../components/Slider/Slider.component'


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,}:Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero netflixOriginals={netflixOriginals}/>
      <div className='flex flex-col gap-4 px-3 md:px-8 lg:px-16 pt-14 md:pt-16 lg:pt-32'>
        <Slider title="Trending Now" movie={trendingNow}/>
        <Slider title="Top Rated" movie={topRated}/>
        <Slider title="Action Movies" movie={actionMovies}/>
        <Slider title="Comedy Movies" movie={comedyMovies}/>
        <Slider title="Horror Movies" movie={horrorMovies}/>
        <Slider title="Romance Movies" movie={romanceMovies}/>
        <Slider title="Documentaries" movie={documentaries}/>
      </div>
    </div>
    
  )
}

export default Home

export const getServerSideProps = async () => {
  // const products = await getProducts(payments, {
  //   includePrices: true,
  //   activeOnly: true,
  // })
  //   .then((res) => res)
  //   .catch((error) => console.log(error.message))

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
      // products,
    },
  }
}