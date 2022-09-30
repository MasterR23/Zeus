import '../Style/comicPage.css'
import { Link } from 'react-router-dom'
import iconEnter from '../statics/images/ingresar.png'

const SectionComic = () => {
  return (
    <section className='comicPage'>
      <div id='Comic' className='space' />
      <h1 className='title-section'>CÓMIC</h1>
      <h5>¡El cómic interactivo que te ofrecemos!</h5>
      <div className='cover-page'>
        <h3>2022</h3>
        <p>
          Es un webcómic que ofrece interactividad y revive la historia del dios
          mas poderoso Zeus y ademas da conocer a otros dioses y titanes importantes de la
          mitología griega.
        </p>
        <button className='enter'>
          <picture>
            <img className='iconEnter' src={iconEnter} alt='' />
          </picture>
          <Link className='link-comic' to='/comic'>
            Ingresar
          </Link>
        </button>
      </div>
    </section>
  )
}

export default SectionComic
