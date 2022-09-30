import '../Style/Info.css'
import iconEnter from '../statics/images/libro-abierto.png'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web'
import { useEffect } from 'react'
import PageInfo from '../Lottie/FrontPage/gods.json'

const Information = () => {
  // animacion
  useEffect(() => {
    const Information = lottie.loadAnimation({
      container: document.getElementById('page-info'),
      renderer: 'html',
      loop: true,
      autoplay: true,
      animationData: PageInfo
    })
    return () => {
      Information.destroy()
    }
  }, [true])

  useEffect(() => {
    const Information2 = lottie.loadAnimation({
      container: document.getElementById('page-info-mobile'),
      renderer: 'html',
      loop: true,
      autoplay: true,
      animationData: PageInfo
    })
    return () => {
      Information2.destroy()
    }
  }, [true])

  return (
    <section className='Information'>
      <div id='Contact' className='space' />
      <h1 className='title-section'>INFORMACIÓN</h1>
      <h5>¡Conoce más acerca de la mitología griega!</h5>
      <div className='container-card-info'>
        <div id='page-info' />
        <div className='card-info'>
          <div className='text-information'>
            <h1>Mitología griega</h1>
            <p>
              ¿Quieres conocer más acerca de los dioses y titanes griegos?, aquí
              podrás encontrar información contundente de algunos de los dioses
              y titanes, además esta información que te bridamos es verídica a
              los mitos y leyendas de la Antigua Grecia.
            </p>
            <button className='enter'>
              <picture>
                <img className='iconEnter' src={iconEnter} alt='' />
              </picture>
              <Link className='link-mitologia' to='/mitologia'>
                Informarse
              </Link>
            </button>
          </div>
          <div className='picture-information'>
            <div id='page-info-mobile' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
