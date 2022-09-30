import '../Style/ChapterOne.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import lottie from 'lottie-web'
import help from '../statics/Ext-1/signo.png'
import { Link } from 'react-router-dom'

import ReactHowler from 'react-howler'
import foundSound from '../statics/sound/ChapterOne.mp3'
import oneSlide1 from '../statics/sound/chapterOne/oneSlide1.mp3'
import oneSlide2 from '../statics/sound/chapterOne/oneSlide2.mp3'
import oneSlide3 from '../statics/sound/chapterOne/oneSlide3.mp3'
import oneSlide4 from '../statics/sound/chapterOne/oneSlide4.mp3'
import oneSlide5 from '../statics/sound/chapterOne/oneSlide5.mp3'
import oneSlide6 from '../statics/sound/chapterOne/oneSlide6.mp3'
import oneSlide7 from '../statics/sound/chapterOne/oneSlide7.mp3'
import oneSlide8 from '../statics/sound/chapterOne/oneSlide8.mp3'
import oneSlide9 from '../statics/sound/chapterOne/oneSlide9.mp3'
import icon from '../statics/sound/icon.png'

// importacion de json lottie
import animationExt2 from '../Lottie/Ext-1/ext2.json'
import animationExt3 from '../Lottie/Ext-1/ext3.json'
import animationExt4 from '../Lottie/Ext-1/ext4.json'
import animationExt5 from '../Lottie/Ext-1/ext5.json'
import animationExt6 from '../Lottie/Ext-1/ext6.json'
import animationExt7 from '../Lottie/Ext-1/ext7.json'
import animationExt8 from '../Lottie/Ext-1/ext8.json'
import animationExt9 from '../Lottie/Ext-1/ext9.json'
import animationExt10 from '../Lottie/Ext-1/ext10.json'
import animationExt11 from '../Lottie/Ext-1/ext11.json'
import animationExt12 from '../Lottie/Ext-1/ext12.json'
import animationExt13 from '../Lottie/Ext-1/ext13.json'
import animationExt14 from '../Lottie/Ext-1/ext14.json'
import animationExt15 from '../Lottie/Ext-1/ext15.json'
import animationExt16 from '../Lottie/Ext-1/ext16.json'
import animationExt17 from '../Lottie/Ext-1/ext17.json'
import animationExt18 from '../Lottie/Ext-1/ext18.json'
import animationExt19 from '../Lottie/Ext-1/ext19.json'
import animationExt20 from '../Lottie/Ext-1/ext20.json'
import animationExt21 from '../Lottie/Ext-1/ext21.json'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// import required modules
import { EffectFade, Keyboard, Pagination, Navigation } from 'swiper'

const EpisodeOne = () => {
  // funciones animaciones en css

  const MoveZeus = () => {
    document.querySelector('.box-1-zeus').classList.toggle('cssZeus')
    document.querySelector('.box-1-nube-1').classList.toggle('cssNube-1')
    document.querySelector('.box-1-nube-2').classList.toggle('cssNube-2')
    document.querySelector('.box-1-sol').classList.toggle('cssSol')
  }

  // estados de las aniamaciones

  const [play, setPlay] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)
  const [play7, setPlay7] = useState(false)
  const [play8, setPlay8] = useState(false)
  const [play9, setPlay9] = useState(false)
  const [play10, setPlay10] = useState(false)
  const [play11, setPlay11] = useState(false)
  const [play12, setPlay12] = useState(false)
  const [play13, setPlay13] = useState(false)
  const [play14, setPlay14] = useState(false)
  const [play15, setPlay15] = useState(false)
  const [play16, setPlay16] = useState(false)
  const [play17, setPlay17] = useState(false)
  const [play18, setPlay18] = useState(false)
  const [play19, setPlay19] = useState(false)
  const [play20, setPlay20] = useState(false)

  // estados de sonidos
  const [sound1, setSound1] = useState(false)
  const [sound2, setSound2] = useState(false)
  const [sound3, setSound3] = useState(false)
  const [sound4, setSound4] = useState(false)
  const [sound5, setSound5] = useState(false)
  const [sound6, setSound6] = useState(false)
  const [sound7, setSound7] = useState(false)
  const [sound8, setSound8] = useState(false)
  const [sound9, setSound9] = useState(false)

  // Funcione de sonidos

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
  }

  // animacion con bodymovin
  useEffect(() => {
    const ext2 = lottie.loadAnimation({
      container: document.getElementById('lottie-1'),
      renderer: 'html',
      loop: false,
      autoplay: play,
      animationData: animationExt2
    })
    return () => {
      ext2.destroy()
    }
  }, [play])

  useEffect(() => {
    const ext3 = lottie.loadAnimation({
      container: document.getElementById('lottie-2'),
      renderer: 'html',
      loop: false,
      autoplay: play2,
      animationData: animationExt3
    })
    return () => ext3.destroy() // optional clean up for unmounting
  }, [play2])

  useEffect(() => {
    const ext4 = lottie.loadAnimation({
      container: document.getElementById('lottie-3'),
      renderer: 'html',
      loop: false,
      autoplay: play3,
      animationData: animationExt4
    })
    return () => {
      ext4.destroy()
    }
  }, [play3])

  useEffect(() => {
    const ext5 = lottie.loadAnimation({
      container: document.getElementById('lottie-4'),
      renderer: 'html',
      loop: false,
      autoplay: play4,
      animationData: animationExt5
    })
    return () => {
      ext5.destroy()
    }
  }, [play4])

  useEffect(() => {
    const ext6 = lottie.loadAnimation({
      container: document.getElementById('lottie-5'),
      renderer: 'html',
      loop: false,
      autoplay: play5,
      animationData: animationExt6
    })
    return () => {
      ext6.destroy()
    }
  }, [play5])

  useEffect(() => {
    const ext7 = lottie.loadAnimation({
      container: document.getElementById('lottie-6'),
      renderer: 'html',
      loop: false,
      autoplay: play6,
      animationData: animationExt7
    })
    return () => {
      ext7.destroy()
    }
  }, [play6])

  useEffect(() => {
    const ext8 = lottie.loadAnimation({
      container: document.getElementById('lottie-7'),
      renderer: 'html',
      loop: false,
      autoplay: play7,
      animationData: animationExt8
    })
    return () => {
      ext8.destroy()
    }
  }, [play7])

  useEffect(() => {
    const ext9 = lottie.loadAnimation({
      container: document.getElementById('lottie-8'),
      renderer: 'html',
      loop: false,
      autoplay: play8,
      animationData: animationExt9
    })
    return () => {
      ext9.destroy()
    }
  }, [play8])

  useEffect(() => {
    const ext10 = lottie.loadAnimation({
      container: document.getElementById('lottie-9'),
      renderer: 'html',
      loop: false,
      autoplay: play9,
      animationData: animationExt10
    })
    return () => {
      ext10.destroy()
    }
  }, [play9])

  useEffect(() => {
    const ext11 = lottie.loadAnimation({
      container: document.getElementById('lottie-10'),
      renderer: 'html',
      loop: false,
      autoplay: play10,
      animationData: animationExt11
    })
    return () => {
      ext11.destroy()
    }
  }, [play10])

  useEffect(() => {
    const ext12 = lottie.loadAnimation({
      container: document.getElementById('lottie-11'),
      renderer: 'html',
      loop: false,
      autoplay: play11,
      animationData: animationExt12
    })
    return () => {
      ext12.destroy()
    }
  }, [play11])

  useEffect(() => {
    const ext13 = lottie.loadAnimation({
      container: document.getElementById('lottie-12'),
      renderer: 'html',
      loop: false,
      autoplay: play12,
      animationData: animationExt13
    })
    return () => {
      ext13.destroy()
    }
  }, [play12])

  useEffect(() => {
    const ext14 = lottie.loadAnimation({
      container: document.getElementById('lottie-13'),
      renderer: 'html',
      loop: false,
      autoplay: play13,
      animationData: animationExt14
    })
    return () => {
      ext14.destroy()
    }
  }, [play13])

  useEffect(() => {
    const ext15 = lottie.loadAnimation({
      container: document.getElementById('lottie-14'),
      renderer: 'html',
      loop: false,
      autoplay: play14,
      animationData: animationExt15
    })
    return () => {
      ext15.destroy()
    }
  }, [play14])

  useEffect(() => {
    const ext16 = lottie.loadAnimation({
      container: document.getElementById('lottie-15'),
      renderer: 'html',
      loop: false,
      autoplay: play15,
      animationData: animationExt16
    })
    return () => {
      ext16.destroy()
    }
  }, [play15])

  useEffect(() => {
    const ext17 = lottie.loadAnimation({
      container: document.getElementById('lottie-16'),
      renderer: 'html',
      loop: false,
      autoplay: play16,
      animationData: animationExt17
    })
    return () => {
      ext17.destroy()
    }
  }, [play16])

  useEffect(() => {
    const ext18 = lottie.loadAnimation({
      container: document.getElementById('lottie-17'),
      renderer: 'html',
      loop: false,
      autoplay: play17,
      animationData: animationExt18
    })
    return () => {
      ext18.destroy()
    }
  }, [play17])

  useEffect(() => {
    const ext19 = lottie.loadAnimation({
      container: document.getElementById('lottie-18'),
      renderer: 'html',
      loop: false,
      autoplay: play18,
      animationData: animationExt19
    })
    return () => {
      ext19.destroy()
    }
  }, [play18])

  useEffect(() => {
    const ext20 = lottie.loadAnimation({
      container: document.getElementById('lottie-19'),
      renderer: 'html',
      loop: false,
      autoplay: play19,
      animationData: animationExt20
    })
    return () => {
      ext20.destroy()
    }
  }, [play19])

  useEffect(() => {
    const ext21 = lottie.loadAnimation({
      container: document.getElementById('lottie-20'),
      renderer: 'html',
      loop: false,
      autoplay: play20,
      animationData: animationExt21
    })
    return () => {
      ext21.destroy()
    }
  }, [play20])

  // funciones

  const onPlayCap = (event) => {
    setPlay(!play)
  }

  const onPlayCap2 = (event) => {
    setPlay2(!play2)
    setPlay3(false)
    document.querySelector('.box-3').classList.toggle('cssFondo')
    document.querySelector('.text-1').classList.toggle('cssText1')
    document.querySelector('#lottie-2').classList.toggle('cssOut')
  }

  const onPlayCap3 = (event) => {
    setPlay3(!play3)
  }
  const onPlayCap4 = (event) => {
    setPlay4(!play4)
  }
  const onPlayCap5 = (event) => {
    setPlay5(!play5)
    document.querySelector('.box-6').classList.toggle('cssFondo2')
    document.querySelector('#lottie-5').classList.toggle('cssMoveRea')
  }
  const onPlayCap6 = (event) => {
    setPlay6(!play6)
  }
  const onPlayCap7 = (event) => {
    setPlay7(!play7)
  }
  const onPlayCap8 = (event) => {
    setPlay8(!play8)
  }
  const onPlayCap9 = (event) => {
    setPlay9(!play9)
    document.querySelector('.box-10').classList.toggle('cssFondo3')
    document.querySelector('#lottie-9').classList.toggle('cssMoveZeus')
  }
  const onPlayCap10 = (event) => {
    setPlay10(!play10)
  }

  const onPlayCap11 = (event) => {
    setPlay11(!play11)
  }

  const onPlayCap12 = (event) => {
    setPlay12(!play12)
  }

  const onPlayCap13 = (event) => {
    setPlay13(!play13)
  }

  const onPlayCap14 = (event) => {
    setPlay14(!play14)
  }

  const onPlayCap15 = (event) => {
    setPlay15(!play15)
  }

  const onPlayCap16 = (event) => {
    setPlay16(!play16)
    document.querySelector('.box-17').classList.toggle('cssFondo4')
  }

  const onPlayCap17 = (event) => {
    setPlay17(!play17)
    document.querySelector('.box-18').classList.toggle('cssFondo5')
  }

  const onPlayCap18 = (event) => {
    setPlay18(!play18)
    document.querySelector('.box-19').classList.toggle('cssFondo6')
  }

  const onPlayCap19 = (event) => {
    setPlay19(!play19)
  }

  const onPlayCap20 = (event) => {
    setPlay20(!play20)
  }

  // help

  const show = () => {
    document.querySelector('.help').classList.add('help-show')
    document.querySelector('.container-help').classList.add('container-show')
    setSound1(!sound1)
  }

  const hidden = () => {
    document.querySelector('.help').classList.remove('help-show')
    document
      .querySelector('.container-help')
      .classList.remove('container-show')
  }

  // en pantalla

  return (
    <section className='Chapter-one'>
      <Link className='back' to='/comic'>
        <div className='logo' />
      </Link>
      <ReactHowler src={foundSound} playing loop volume={0.2} />
      <main className='container-help'>
        <div className='help'>
          <div className='icon-help' onClick={hidden} />
          <h1>¡CÓMIC INTERACTIVO!</h1>
          <ul>
            <p>
              <li>
                Para explorar el cómic puedes hacer click en las flechas en
                pantalla o usar en el teclado las flechas de izquierda y derecha
                para así desplazarte entre las viñetas
              </li>
            </p>
            <p>
              <li>
                En las viñetas debes dar click a los personajes, para ver su
                animación
              </li>
            </p>
            <p>
              <li>
                En cada página del cómic ahí narraciones y las puedes encontrar
                en el centro de las ondas de color amarillo en la parte inferior
                izquierda de tu pantalla
              </li>
            </p>
            <p>
              <li>Diviértete</li>
            </p>
          </ul>
        </div>
      </main>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        navigation
        onSlideChange={() => soundsSet()}
        keyboard={{ enabled: true }}
        effect='fade'
        modules={[EffectFade, Keyboard, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-1'>
              <div className='box-1-zeus' onClick={MoveZeus} />
              <div className='box-1-nube-1' />
              <div className='box-1-sol' />
              <div className='box-1-nube-2' />

              <ReactHowler
                src={oneSlide1}
                volume={2}
                playing={sound1}
                onEnd={() => setSound1(false)}
              />
              <button className='help-column onda'>
                <img src={help} onClick={show} width='50px' />
              </button>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-2'>
              <div onClick={onPlayCap} id='lottie-1' />
              <ReactHowler
                src={oneSlide2}
                volume={2}
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
            </div>
            <div className='container-box'>
              <div className='box-3'>
                <div className='over-1'>
                  <div onClick={onPlayCap2} id='lottie-2' />
                  <div className='text-1' />
                </div>
              </div>
              <div className='box-4'>
                <div className='over-2'>
                  <div onClick={onPlayCap3} id='lottie-3' />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-5'>
              <div onClick={onPlayCap4} id='lottie-4' />
              <ReactHowler
                src={oneSlide3}
                volume={2}
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
            </div>
            <div className='box-6'>
              <div onClick={onPlayCap5} id='lottie-5' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='container-box'>
              <div className='box-7'>
                <div onClick={onPlayCap6} id='lottie-6' />
              </div>
              <div className='box-8'>
                <div onClick={onPlayCap7} id='lottie-7' />
                <ReactHowler
                  src={oneSlide4}
                  volume={2}
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
            </div>
            <div className='box-9'>
              <div onClick={onPlayCap8} id='lottie-8' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-10'>
              <div onClick={onPlayCap9} id='lottie-9' />
            </div>
            <div className='box-11'>
              <div onClick={onPlayCap10} id='lottie-10' />
              <ReactHowler
                src={oneSlide5}
                volume={2}
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
            <div className='box-12'>
              <div onClick={onPlayCap11} id='lottie-11' />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-13'>
              <div onClick={onPlayCap12} id='lottie-12' />
              <ReactHowler
                src={oneSlide6}
                volume={2}
                playing={sound6}
                onEnd={() => setSound6(false)}
              />
              <button className='sound-column--modified onda'>
                <img
                  src={icon}
                  onClick={() => setSound6(!sound6)}
                  width='50px'
                />
              </button>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-14'>
              <div onClick={onPlayCap13} id='lottie-13' />
              <ReactHowler
                src={oneSlide7}
                volume={2}
                playing={sound7}
                onEnd={() => setSound7(false)}
              />
              <button className='sound-column onda'>
                <img
                  src={icon}
                  onClick={() => setSound7(!sound7)}
                  width='50px'
                />
              </button>
            </div>
            <div className='container-box'>
              <div className='box-15'>
                <div onClick={onPlayCap14} id='lottie-14' />
              </div>
              <div className='box-16'>
                <div onClick={onPlayCap15} id='lottie-15' />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-17'>
              <div onClick={onPlayCap16} id='lottie-16' />
              <ReactHowler
                src={oneSlide8}
                volume={2}
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
            </div>
            <div className='container-box'>
              <div className='box-18'>
                <div onClick={onPlayCap17} id='lottie-17' />
              </div>
              <div className='box-19'>
                <div onClick={onPlayCap18} id='lottie-18' />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='Escena-1'>
            <div className='box-20'>
              <div onClick={onPlayCap19} id='lottie-19' />
              <ReactHowler
                src={oneSlide9}
                volume={3}
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
            </div>
            <div className='box-21'>
              <div onClick={onPlayCap20} id='lottie-20' />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default EpisodeOne
