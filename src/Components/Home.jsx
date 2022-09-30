import '../Style/Home.css'
import iconHome from '../statics/images/icon-home.png'
import lottie from 'lottie-web'
import { useEffect } from 'react'

// sonidos
import ReactHowler from 'react-howler'
import Sound from '../statics/sound/open.mp3'
import HomeZeus from '../Lottie/FrontPage/zeus.json'
import HomeSun from '../Lottie/FrontPage/sun.json'

const Home = () => {
  // animaciones
  useEffect(() => {
    const FrontPage = lottie.loadAnimation({
      container: document.getElementById('animation-1'),
      renderer: 'html',
      loop: true,
      autoplay: true,
      animationData: HomeZeus
    })
    return () => {
      FrontPage.destroy()
    }
  }, [true])

  useEffect(() => {
    const FrontPage2 = lottie.loadAnimation({
      container: document.getElementById('animation-2'),
      renderer: 'html',
      loop: true,
      autoplay: true,
      animationData: HomeSun
    })
    return () => {
      FrontPage2.destroy()
    }
  }, [HomeSun])

  return (
    <section className='home'>
      <ReactHowler src={Sound} loop volume={0.1} />
      <div id='Home' className='space' />
      <div className='aspect'>
        <div className='zeus-page'>
          <div id='animation-1' />
        </div>
        <div className='sun-page'>
          <div id='animation-2' />
        </div>
        <div className='text-home'>
          <img src={iconHome} alt='' />
          <h1 className='title-home'>Bienvenidos</h1>
          <p className='subtext-home'>
            Zeus, es un proyecto que ha sido desarrollado por jóvenes estudiantes que implementa el diseño multimedial y el desarrollo de software para lograr como resultado el mejor cómic interactivo que verás el día de hoy.
          </p>
          <p className='subtext-home-two'>
            Es un placer tenerte con nosotros ¡Disfruta la experiencia!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
