import '../Style/Proyect.css'
import iconProyect from '../statics/images/proyect.png'
import iconContent from '../statics/images/content.png'
import iconComic from '../statics/images/comic.png'

const Proyect = () => {
  return (
    <section className='proyect'>
      <div id='Proyect' className='space' />
      <h1 className='title-section'>PROYECTO</h1>
      <h5>¡Éste proyecto es pensando en ti!</h5>
      <div className='flex'>
        <div className='info-proyect'>
          <figure className='circle'>
            <img className='icon-proyect' src={iconProyect} alt='' />
          </figure>
          <h1>Nuestro Proyecto</h1>
          <p>
            Nuestro proyecto está centrado en promover el aprendizaje
            sobre la mitología griega por medio de la realización de un
            cómic digital interactivo ¡y que te diviertas en el proceso!
          </p>
        </div>
        <div className='info-content'>
          <figure className='circle'>
            <img src={iconContent} className='icon-content' alt='' />
          </figure>
          <h1>Nuestro Contenido</h1>
          <p>
            Este proyecto se centra en el dios Zeus, sus orígenes, su historia
            y aventuras. Te sumergirás en increíbles relatos llenos de acción y venganza.

          </p>
        </div>
        <div className='info-comic'>
          <figure className='circle'>
            <img src={iconComic} className='icon-comic' alt='' />
          </figure>
          <h1>Cómic interactivo</h1>
          <p>
            La interactividad proporciona una alternativa al método de aprendizaje
            convencional, lo que facilita el nivel de entendimiento de los usuarios
            interesados en aprender algo nuevo.

          </p>
        </div>
      </div>
    </section>
  )
}

export default Proyect
