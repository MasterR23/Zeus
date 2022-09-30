import '../Style/Reviews.css'
import { reviewsInfoClients } from '../data/reviews'
import PhotosReviews from '../data/PhotosReviews'
import efect from '../statics/sound/efect.mp3'
import { Howl } from 'howler'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { useState } from 'react'

const {
  ZeusAdulto,
  InfoZeusAdulto,
  GroupZeusAdulto,
  Cronos,
  InfoCronos,
  GroupCronos,
  Rea,
  InforRea,
  GroupRea,
  Ezio,
  InfoEzio,
  GroupEzio,
  Amaltea,
  InfoAmaltea,
  GroupAmaltea,
  ZeusJoven,
  InfoZeusJoven,
  GroupZeusJoven,
  Espectro,
  InfoEspectro,
  GroupEspectro
} = reviewsInfoClients

const Cards = ({
  character,
  group,
  info,
  photo
}) => {
  return (
    <>
      <div className='card'>
        <div className='head'>
          <div className='circulo' />
          <div className='img'>
            <img src={photo} alt='' />
          </div>
        </div>

        <div className='description'>
          <h3>{character}</h3>
          <h4>{group}</h4>
          <p>{info}</p>
        </div>
      </div>
    </>
  )
}

const Characters = ({ list, views, hides }) => {
  return <div className={list} onClick={views} onMouseOut={hides} />
}

const Reviews = () => {
  const effect = new Howl({
    src: efect,
    html5: true
  })

  const [count, setCount] = useState(0)
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [countC, setCountC] = useState(0)
  const [countD, setCountD] = useState(0)
  const [countF, setCountF] = useState(0)
  const [countG, setCountG] = useState(0)

  // carta de zeus

  const shows1 = () => {
    document.querySelector('.card-character1').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCount(1)
    }, 800)
  }
  const hide1 = () => {
    if (count === 1) {
      document.querySelector('.card-character1').classList.remove('show-img')
      document.querySelector('.card-character1').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character1').classList.remove('hide-img')
        setCount(0)
      }, 700)
    }
  }

  //  carta de cronos

  const shows2 = () => {
    document.querySelector('.card-character2').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountA(1)
    }, 800)
  }

  const hide2 = () => {
    if (countA === 1) {
      document.querySelector('.card-character2').classList.remove('show-img')
      document.querySelector('.card-character2').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character2').classList.remove('hide-img')
        setCountA(0)
      }, 700)
    }
  }

  // carta de rea
  const shows3 = () => {
    document.querySelector('.card-character3').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountB(1)
    }, 800)
  }

  const hide3 = () => {
    if (countB === 1) {
      document.querySelector('.card-character3').classList.remove('show-img')
      document.querySelector('.card-character3').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character3').classList.remove('hide-img')
        setCountB(0)
      }, 700)
    }
  }

  // carta de ezio
  const shows4 = () => {
    document.querySelector('.card-character4').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountC(1)
    }, 800)
  }

  const hide4 = () => {
    if (countC === 1) {
      document.querySelector('.card-character4').classList.remove('show-img')
      document.querySelector('.card-character4').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character4').classList.remove('hide-img')
        setCountC(0)
      }, 700)
    }
  }

  // carta de amaltea
  const shows5 = () => {
    document.querySelector('.card-character5').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountD(1)
    }, 800)
  }

  const hide5 = () => {
    if (countD === 1) {
      document.querySelector('.card-character5').classList.remove('show-img')
      document.querySelector('.card-character5').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character5').classList.remove('hide-img')
        setCountD(0)
      }, 700)
    }
  }

  // carta de zeus joven
  const shows6 = () => {
    document.querySelector('.card-character6').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountF(1)
    }, 800)
  }

  const hide6 = () => {
    if (countF === 1) {
      document.querySelector('.card-character6').classList.remove('show-img')
      document.querySelector('.card-character6').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character6').classList.remove('hide-img')
        setCountF(0)
      }, 700)
    }
  }
  // carta de espectro
  const shows7 = () => {
    document.querySelector('.card-character7').classList.add('show-img')
    effect.play()
    setTimeout(() => {
      setCountG(1)
    }, 800)
  }

  const hide7 = () => {
    if (countG === 1) {
      document.querySelector('.card-character7').classList.remove('show-img')
      document.querySelector('.card-character7').classList.add('hide-img')
      setTimeout(() => {
        document.querySelector('.card-character7').classList.remove('hide-img')
        setCountG(0)
      }, 700)
    }
  }

  // En pantalla

  return (
    <section className='reviews-section'>
      <div id='Reviews' className='space' />
      <h1 className='title-section'>PERSONAJES</h1>
      <h5>¡Conoce más acerca de los personajes del cómic!</h5>
      <div className='contenerdor-cards' />
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[0]}
              character={ZeusAdulto}
              group={GroupZeusAdulto}
              info={InfoZeusAdulto}
            />
            <Characters list='card-character1' views={shows1} hides={hide1} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[1]}
              character={Cronos}
              group={GroupCronos}
              info={InfoCronos}
            />
            <Characters list='card-character2' views={shows2} hides={hide2} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[2]}
              character={Rea}
              group={GroupRea}
              info={InforRea}
            />
            <Characters list='card-character3' views={shows3} hides={hide3} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[3]}
              character={Ezio}
              group={GroupEzio}
              info={InfoEzio}
            />
            <Characters list='card-character4' views={shows4} hides={hide4} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[4]}
              character={Amaltea}
              group={GroupAmaltea}
              info={InfoAmaltea}
            />
            <Characters list='card-character5' views={shows5} hides={hide5} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[5]}
              character={ZeusJoven}
              group={GroupZeusJoven}
              info={InfoZeusJoven}
            />
            <Characters list='card-character6' views={shows6} hides={hide6} />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              photo={PhotosReviews[6]}
              character={Espectro}
              group={GroupEspectro}
              info={InfoEspectro}
            />
            <Characters list='card-character7' views={shows7} hides={hide7} />
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  )
}

export default Reviews
