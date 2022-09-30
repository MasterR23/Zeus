import '../Style/Chapters.css'
import { Link } from 'react-router-dom'
import logo from '../statics/images/Logo.png'
import Loading from './Loading'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper'
import { useState } from 'react'

const Chapters = () => {
  const PagesChapters = ({ background, chapterText, ChapterName, linksEpisodes }) => {
    return (
      <div className='card-chapter'>
        <picture>
          <div className='img-chapter' id={background} />
        </picture>
        <Link to={linksEpisodes} className='link-episiodios'>
          <article className='chapter-text'>
            <h1>{chapterText}</h1>
            <p>¡{ChapterName}!</p>
          </article>
        </Link>
      </div>
    )
  }

  const [loading, setLoading] = useState('load')

  if (loading === 'load') {
    setTimeout(() => {
      setLoading('comic')
    }, 500)
    return (
      <Loading />
    )
  } else {
    return (
      <section>
        <div className='container-chapter'>
          <p className='mobile'>¡Lo sentimos!, aun no esta disponible en la version movil</p>
          <nav className='Chapters'>
            <picture>
              <img src={logo} alt='' />
            </picture>
            <article>
              <Link to='/' className='link-page'>
                Regresar
              </Link>
            </article>
          </nav>
          <Swiper
            effect='cube'
            grabCursor
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <PagesChapters
                background='page-1'
                chapterText='Capitulo 1'
                ChapterName='El nacimiento de un dios'
                linksEpisodes='/Comic/1'
              />
            </SwiperSlide>
            <SwiperSlide>
              <PagesChapters
                background='page-2'
                chapterText='Capitulo 2'
                ChapterName='La caída del Titán'
                linksEpisodes='/Comic/2'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
  }
}

export default Chapters
