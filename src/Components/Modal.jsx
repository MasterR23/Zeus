import { useState } from 'react'
import film from '../statics/film/movie.mp4'
import '../Style/Film.css'

const View = () => {
  const [silent, setSilent] = useState(true)

  const quitar = () => {
    document.querySelector('.film').classList.add('quitar')
    document.querySelector('.film').classList.remove('poner')
    document.querySelector('.ver').classList.add('poner')
    document.querySelector('.ver').classList.remove('quitar')
    setSilent(true)
  }

  const poner = () => {
    document.querySelector('.film').classList.add('poner')
    document.querySelector('.film').classList.remove('quitar')
    document.querySelector('.ver').classList.add('quitar')
    document.querySelector('.ver').classList.remove('poner')
    setSilent(false)
  }

  return (
    <>
      <section className='film'>
        <div className='container-film'>
          <video
            id='film'
            src={film}
            controls='true'
            autoPlay='true'
            muted={silent}
          />
          <div className='close' onClick={quitar} />
        </div>
      </section>
      <button className='ver' onClick={poner} />
    </>
  )
}

export default View
