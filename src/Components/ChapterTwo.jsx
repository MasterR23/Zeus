import '../Style/ChapterTwo.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import lottie from 'lottie-web'
import { Link } from 'react-router-dom'

import ReactHowler from 'react-howler'
import foundSound from '../statics/sound/ChapterTwo.mp3'
import twoSlide1 from '../statics/sound/chapterTwo/twoSlide1.mp3'
import twoSlide2 from '../statics/sound/chapterTwo/twoSlide2.mp3'
import twoSlide3 from '../statics/sound/chapterTwo/twoSlide3.mp3'
import twoSlide4 from '../statics/sound/chapterTwo/twoSlide4.mp3'
import twoSlide5 from '../statics/sound/chapterTwo/twoSlide5.mp3'
import twoSlide6 from '../statics/sound/chapterTwo/twoSlide6.mp3'
import twoSlide7 from '../statics/sound/chapterTwo/twoSlide7.mp3'
import twoSlide8 from '../statics/sound/chapterTwo/twoSlide8.mp3'
import twoSlide9 from '../statics/sound/chapterTwo/twoSlide9.mp3'
import twoSlide10 from '../statics/sound/chapterTwo/twoSlide10.mp3'
import icon from '../statics/sound/icon.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// import required modules
import { EffectFade, Pagination, Navigation, Keyboard } from 'swiper'

// importaciones del lottie

import animationExt22 from '../Lottie/Ext-2/ext22.json'
import animationExt23 from '../Lottie/Ext-2/ext23.json'
import animationExt24 from '../Lottie/Ext-2/ext24.json'
import animationExt25 from '../Lottie/Ext-2/ext25.json'
import animationExt26 from '../Lottie/Ext-2/ext26.json'
import animationExt27 from '../Lottie/Ext-2/ext27.json'

import animationExt28 from '../Lottie/Ext-2/ext28.json'
import animationExt29 from '../Lottie/Ext-2/ext29.json'
import animationExt30 from '../Lottie/Ext-2/ext30.json'
import animationExt31 from '../Lottie/Ext-2/ext31.json'
import animationExt32 from '../Lottie/Ext-2/ext32.json'
import animationExt33 from '../Lottie/Ext-2/ext33.json'
import animationExt34 from '../Lottie/Ext-2/ext34.json'
import animationExt35 from '../Lottie/Ext-2/ext35.json'

import animationExt36 from '../Lottie/Ext-2/ext36.json'
import animationExt37 from '../Lottie/Ext-2/ext37.json'
import animationExt38 from '../Lottie/Ext-2/ext38.json'
import animationExt39 from '../Lottie/Ext-2/ext39.json'
import animationExt40 from '../Lottie/Ext-2/ext40.json'
import animationExt41 from '../Lottie/Ext-2/ext41.json'
import animationExt42 from '../Lottie/Ext-2/ext42.json'
import animationExt43 from '../Lottie/Ext-2/ext43.json'
import animationExt44 from '../Lottie/Ext-2/ext44.json'

// rendering

const EpisodeTwo = () => {
  // estados de las animaciones

  const [play21, setPlay21] = useState(false)
  const [play22, setPlay22] = useState(false)
  const [play23, setPlay23] = useState(false)
  const [play24, setPlay24] = useState(false)
  const [play25, setPlay25] = useState(false)
  const [play26, setPlay26] = useState(false)
  const [play27, setPlay27] = useState(false)
  const [play28, setPlay28] = useState(false)
  const [play29, setPlay29] = useState(false)
  const [play30, setPlay30] = useState(false)
  const [play31, setPlay31] = useState(false)
  const [play32, setPlay32] = useState(false)
  const [play33, setPlay33] = useState(false)
  const [play34, setPlay34] = useState(false)
  const [play35, setPlay35] = useState(false)
  const [play36, setPlay36] = useState(false)
  const [play37, setPlay37] = useState(false)
  const [play38, setPlay38] = useState(false)
  const [play39, setPlay39] = useState(false)
  const [play40, setPlay40] = useState(false)
  const [play41, setPlay41] = useState(false)
  const [play42, setPlay42] = useState(false)
  const [play43, setPlay43] = useState(false)

  // Estados de los sonidos
  const [sound1, setSound1] = useState(false)
  const [sound2, setSound2] = useState(false)
  const [sound3, setSound3] = useState(false)
  const [sound4, setSound4] = useState(false)
  const [sound5, setSound5] = useState(false)
  const [sound6, setSound6] = useState(false)
  const [sound7, setSound7] = useState(false)
  const [sound8, setSound8] = useState(false)
  const [sound9, setSound9] = useState(false)
  const [sound10, setSound10] = useState(false)

  // Funciones

  const soundsSet = () => {
    setSound1(false)
    setSound2(false)
    setSound3(false)
    setSound4(false)
    setSound5(false)
    setSound6(false)
    setSound7(false)
    setSound8(false)
    setSound9(false)
    setSound10(false)
  }
  // creacion de aniamciones del lottie

  useEffect(() => {
    const ext22 = lottie.loadAnimation({
      container: document.getElementById('lottie-21'),
      renderer: 'html',
      loop: false,
      autoplay: play21,
      animationData: animationExt22
    })
    return () => {
      ext22.destroy()
    }
  }, [play21])

  useEffect(() => {
    const ext23 = lottie.loadAnimation({
      container: document.getElementById('lottie-22'),
      renderer: 'html',
      loop: false,
      autoplay: play22,
      animationData: animationExt23
    })
    return () => {
      ext23.destroy()
    }
  }, [play22])

  useEffect(() => {
    const ext24 = lottie.loadAnimation({
      container: document.getElementById('lottie-23'),
      renderer: 'html',
      loop: false,
      autoplay: play23,
      animationData: animationExt24
    })
    return () => {
      ext24.destroy()
    }
  }, [play23])

  useEffect(() => {
    const ext25 = lottie.loadAnimation({
      container: document.getElementById('lottie-24'),
      renderer: 'html',
      loop: false,
      autoplay: play24,
      animationData: animationExt25
    })
    return () => {
      ext25.destroy()
    }
  }, [play24])

  useEffect(() => {
    const ext26 = lottie.loadAnimation({
      container: document.getElementById('lottie-25'),
      renderer: 'html',
      loop: false,
      autoplay: play25,
      animationData: animationExt26
    })
    return () => {
      ext26.destroy()
    }
  }, [play25])

  useEffect(() => {
    const ext27 = lottie.loadAnimation({
      container: document.getElementById('lottie-26'),
      renderer: 'html',
      loop: false,
      autoplay: play26,
      animationData: animationExt27
    })
    return () => {
      ext27.destroy()
    }
  }, [play26])

  useEffect(() => {
    const ext28 = lottie.loadAnimation({
      container: document.getElementById('lottie-27'),
      renderer: 'html',
      loop: false,
      autoplay: play27,
      animationData: animationExt28
    })
    return () => {
      ext28.destroy()
    }
  }, [play27])

  useEffect(() => {
    const ext29 = lottie.loadAnimation({
      container: document.getElementById('lottie-28'),
      renderer: 'html',
      loop: false,
      autoplay: play28,
      animationData: animationExt29
    })
    return () => {
      ext29.destroy()
    }
  }, [play28])

  useEffect(() => {
    const ext30 = lottie.loadAnimation({
      container: document.getElementById('lottie-29'),
      renderer: 'html',
      loop: false,
      autoplay: play29,
      animationData: animationExt30
    })
    return () => {
      ext30.destroy()
    }
  }, [play29])

  useEffect(() => {
    const ext31 = lottie.loadAnimation({
      container: document.getElementById('lottie-30'),
      renderer: 'html',
      loop: false,
      autoplay: play30,
      animationData: animationExt31
    })
    return () => {
      ext31.destroy()
    }
  }, [play30])

  useEffect(() => {
    const ext32 = lottie.loadAnimation({
      container: document.getElementById('lottie-31'),
      renderer: 'html',
      loop: false,
      autoplay: play31,
      animationData: animationExt32
    })
    return () => {
      ext32.destroy()
    }
  }, [play31])

  useEffect(() => {
    const ext33 = lottie.loadAnimation({
      container: document.getElementById('lottie-32'),
      renderer: 'html',
      loop: false,
      autoplay: play32,
      animationData: animationExt33
    })
    return () => {
      ext33.destroy()
    }
  }, [play32])

  useEffect(() => {
    const ext34 = lottie.loadAnimation({
      container: document.getElementById('lottie-33'),
      renderer: 'html',
      loop: false,
      autoplay: play33,
      animationData: animationExt34
    })
    return () => {
      ext34.destroy()
    }
  }, [play33])

  useEffect(() => {
    const ext35 = lottie.loadAnimation({
      container: document.getElementById('lottie-34'),
      renderer: 'html',
      loop: false,
      autoplay: play34,
      animationData: animationExt35
    })
    return () => {
      ext35.destroy()
    }
  }, [play34])

  useEffect(() => {
    const ext36 = lottie.loadAnimation({
      container: document.getElementById('lottie-35'),
      renderer: 'html',
      loop: false,
      autoplay: play35,
      animationData: animationExt36
    })
    return () => {
      ext36.destroy()
    }
  }, [play35])

  useEffect(() => {
    const ext37 = lottie.loadAnimation({
      container: document.getElementById('lottie-36'),
      renderer: 'html',
      loop: false,
      autoplay: play36,
      animationData: animationExt37
    })
    return () => {
      ext37.destroy()
    }
  }, [play36])

  useEffect(() => {
    const ext38 = lottie.loadAnimation({
      container: document.getElementById('lottie-37'),
      renderer: 'html',
      loop: false,
      autoplay: play37,
      animationData: animationExt38
    })
    return () => {
      ext38.destroy()
    }
  }, [play37])

  useEffect(() => {
    const ext39 = lottie.loadAnimation({
      container: document.getElementById('lottie-38'),
      renderer: 'html',
      loop: false,
      autoplay: play38,
      animationData: animationExt39
    })
    return () => {
      ext39.destroy()
    }
  }, [play38])

  useEffect(() => {
    const ext40 = lottie.loadAnimation({
      container: document.getElementById('lottie-39'),
      renderer: 'html',
      loop: false,
      autoplay: play39,
      animationData: animationExt40 // corregir
    })
    return () => {
      ext40.destroy()
    }
  }, [play39])

  useEffect(() => {
    const ext41 = lottie.loadAnimation({
      container: document.getElementById('lottie-40'),
      renderer: 'html',
      loop: false,
      autoplay: play40,
      animationData: animationExt41 // corregir
    })
    return () => {
      ext41.destroy()
    }
  }, [play40])

  useEffect(() => {
    const ext42 = lottie.loadAnimation({
      container: document.getElementById('lottie-41'),
      renderer: 'html',
      loop: false,
      autoplay: play41,
      animationData: animationExt42 // corregir
    })
    return () => {
      ext42.destroy()
    }
  }, [play41])

  useEffect(() => {
    const ext43 = lottie.loadAnimation({
      container: document.getElementById('lottie-42'),
      renderer: 'html',
      loop: false,
      autoplay: play42,
      animationData: animationExt43 // corregir
    })
    return () => {
      ext43.destroy()
    }
  }, [play42])

  useEffect(() => {
    const ext44 = lottie.loadAnimation({
      container: document.getElementById('lottie-43'),
      renderer: 'html',
      loop: false,
      autoplay: play43,
      animationData: animationExt44 // corregir
    })
    return () => {
      ext44.destroy()
    }
  }, [play43])

  // funciones

  const onPlayCap21 = (event) => {
    setPlay21(!play21)
  }

  const onPlayCap22 = (event) => {
    setPlay22(!play22)
  }

  const onPlayCap23 = (event) => {
    setPlay23(!play23)
  }

  const onPlayCap24 = (event) => {
    setPlay24(!play24)
  }

  const onPlayCap25 = (event) => {
    setPlay25(!play25)
  }

  const onPlayCap26 = (event) => {
    setPlay26(!play26)
  }

  const onPlayCap27 = (event) => {
    setPlay27(!play27)
  }

  const onPlayCap28 = (event) => {
    setPlay28(!play28)
  }

  const onPlayCap29 = (event) => {
    setPlay29(!play29)
  }

  const onPlayCap30 = (event) => {
    setPlay30(!play30)
  }

  const onPlayCap31 = (event) => {
    setPlay31(!play31)
  }

  const onPlayCap32 = (event) => {
    setPlay32(!play32)
  }

  const onPlayCap33 = (event) => {
    setPlay33(!play33)
  }

  const onPlayCap34 = (event) => {
    setPlay34(!play34)
  }

  const onPlayCap35 = (event) => {
    setPlay35(!play35)
  }

  const onPlayCap36 = (event) => {
    setPlay36(!play36)
  }

  const onPlayCap37 = (event) => {
    setPlay37(!play37)
  }

  const onPlayCap38 = (event) => {
    setPlay38(!play38)
  }
  const onPlayCap39 = (event) => {
    setPlay39(!play39)
  }
  const onPlayCap40 = (event) => {
    setPlay40(!play40)
  }
  const onPlayCap41 = (event) => {
    setPlay41(!play41)
  }
  const onPlayCap42 = (event) => {
    setPlay42(!play42)
  }
  const onPlayCap43 = (event) => {
    setPlay43(!play43)
  }

  // states sonidos

  // en pantalla

  return (
    <section className='Chapter-two'>
      <Link className='back' to='/comic'>
        <div className='logo' />
      </Link>
      <ReactHowler src={foundSound} playing loop volume={0.2} />
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        navigation
        onSlideChange={() => soundsSet()}
        effect='fade'
        keyboard={{ enabled: true }}
        modules={[EffectFade, Keyboard, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-22'>
              <ReactHowler
                src={twoSlide1}
                playing={sound1}
                onEnd={() => setSound1(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound1(!sound1)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap21} id='lottie-21' />
            </div>
            <div className='container-box '>
              <div className='box-23'>
                <div onClick={onPlayCap22} id='lottie-22' />
              </div>
              <div className='box-24'>
                <div onClick={onPlayCap23} id='lottie-23' />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='container-box '>
              <div className='box-25'>
                <div onClick={onPlayCap24} id='lottie-24' />
              </div>
              <div className='box-26'>
                <ReactHowler
                  src={twoSlide2}
                  playing={sound2}
                  onEnd={() => setSound2(false)}
                />
                <button className='sound-column onda'>
                  <img
                    src={icon}
                    onClick={() => setSound2(!sound2)}
                    width='50px'
                  />
                </button>
                <div onClick={onPlayCap25} id='lottie-25' />
              </div>
            </div>
            <div className='box-27'>
              <div onClick={onPlayCap26} id='lottie-26' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-28'>
              <ReactHowler
                src={twoSlide3}
                playing={sound3}
                onEnd={() => setSound3(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound3(!sound3)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap27} id='lottie-27' />
            </div>
            <div className='box-29'>
              <div onClick={onPlayCap28} id='lottie-28' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-30'>
              <div onClick={onPlayCap29} id='lottie-29' />
              <ReactHowler
                src={twoSlide4}
                playing={sound4}
                onEnd={() => setSound4(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound4(!sound4)}
                  width='50px'
                />
              </button>
            </div>
            <div className='container-box'>
              <div className='box-31'>
                <div onClick={onPlayCap30} id='lottie-30' />
              </div>
              <div className='box-32'>
                <div onClick={onPlayCap31} id='lottie-31' />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='container-box'>
              <div className='box-33'>
                <div onClick={onPlayCap32} id='lottie-32' />
              </div>
              <div className='box-34'>
                <div onClick={onPlayCap33} id='lottie-33' />
                <ReactHowler
                  src={twoSlide5}
                  playing={sound5}
                  onEnd={() => setSound5(false)}
                />
                <button className='sound-column onda'>
                  <img
                    src={icon}
                    onClick={() => setSound5(!sound5)}
                    width='50px'
                  />
                </button>
              </div>
            </div>
            <div className='box-35'>
              <div onClick={onPlayCap34} id='lottie-34' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-36'>
              <div onClick={onPlayCap35} id='lottie-35' />
              <ReactHowler
                src={twoSlide6}
                playing={sound6}
                onEnd={() => setSound6(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound6(!sound6)}
                  width='50px'
                />
              </button>
            </div>
            <div className='box-37'>
              <div onClick={onPlayCap36} id='lottie-36' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-38'>
              <ReactHowler
                src={twoSlide7}
                playing={sound7}
                onEnd={() => setSound7(false)}
              />
              <button className='sound-column--modified2 onda'>
                <img
                  src={icon}
                  onClick={() => setSound7(!sound7)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap37} id='lottie-37' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-39'>
              <ReactHowler
                src={twoSlide8}
                playing={sound8}
                onEnd={() => setSound8(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound8(!sound8)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap38} id='lottie-38' />
            </div>
            <div className='box-40'>
              <div onClick={onPlayCap39} id='lottie-39' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-41'>
              <ReactHowler
                src={twoSlide9}
                playing={sound9}
                onEnd={() => setSound9(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound9(!sound9)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap40} id='lottie-40' />
            </div>
            <div className='container-box'>
              <div className='box-42'>
                <div onClick={onPlayCap41} id='lottie-41' />
              </div>
              <div className='box-43'>
                <div onClick={onPlayCap42} id='lottie-42' />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-2'>
            <div className='box-44'>
              <ReactHowler
                src={twoSlide10}
                playing={sound10}
                onEnd={() => setSound10(false)}
              />
              <button className='sound-column--modified2 onda'>
                <img
                  src={icon}
                  onClick={() => setSound10(!sound10)}
                  width='50px'
                />
              </button>
              <div onClick={onPlayCap43} id='lottie-43' />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default EpisodeTwo
