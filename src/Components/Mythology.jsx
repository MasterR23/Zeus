import '../Style/Mythology.css'

import { Link } from 'react-router-dom'
import logo from '../statics/images/Logo.png'
import Loading from './LoadingBlue'
import lottie from 'lottie-web'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper'
import { useState, useEffect } from 'react'

// animaciones

import GodCronos from '../Lottie/Mitologia/Cronos-portada.json'
import GodUrano from '../Lottie/Mitologia/Urano-portada.json'
import Amaltea from '../Lottie/Mitologia/Amaltea-portada.json'
import GodRea from '../Lottie/Mitologia/Rea-portada.json'
import GodZeus from '../Lottie/Mitologia/Zeus-portada.json'

const Mythology = () => {
  const PagesInfo = ({ background, InfoName, linksInformation, animation, ID }) => {
    return (
      <div className='card-information'>
        <picture>
          <div className='img-information' id={background}>
            {useEffect(() => {
              const Gods = lottie.loadAnimation({
                container: document.getElementById(ID),
                renderer: 'html',
                loop: true,
                autoplay: true,
                animationData: animation
              })
              return () => {
                Gods.destroy()
              }
            }, [])}
            <div id={ID} />
          </div>
        </picture>
        <Link to={linksInformation} className='link-information'>
          <article className='information-text'>
            <h1>{InfoName}</h1>
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
    return <Loading />
  } else {
    return (
      <section>
        <div className='container-information'>
          <p className='mobile'>
            ¡Lo sentimos!, aun no esta disponible en la version movil
          </p>
          <nav className='Mitologias'>
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
              delay: 4500,
              disableOnInteraction: false
            }}
            modules={[Autoplay, EffectCube, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <PagesInfo
                background='page-1'
                InfoName='CRONOS'
                linksInformation='/mitologia/cronos'
                ID='God-animation-1'
                animation={GodCronos}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PagesInfo
                background='page-1'
                InfoName='URANO'
                linksInformation='/mitologia/urano'
                ID='God-animation-2'
                animation={GodUrano}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PagesInfo
                background='page-1'
                InfoName='REA'
                linksInformation='/mitologia/rea'
                ID='God-animation-3'
                animation={GodRea}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PagesInfo
                background='page-1'
                InfoName='AMALTEA'
                linksInformation='/mitologia/amaltea'
                ID='God-animation-4'
                animation={Amaltea}
              />
            </SwiperSlide>
            <SwiperSlide>
              <PagesInfo
                background='page-1'
                InfoName='ZEUS'
                linksInformation='/mitologia/zeus'
                ID='God-animation-5'
                animation={GodZeus}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
  }
}

export default Mythology
