import '../Style/About.css'

const AboutUs = () => {
  return (
    <section className='about'>
      <div id='About' className='space' />
      <div className='flex'>
        <div className='info-about'>
          <h1>Quiénes somos</h1>
          <p>Somos un grupo de jóvenes comprometidos en garantizar y proporcionar aprendizaje y entretenimiento de maneras no tan convencionales por medio de soluciones multimediales para llegar a una experiencia de usuario satisfactoria.
          </p>
        </div>
        <div className='photo-about' />
      </div>
    </section>
  )
}

export default AboutUs
