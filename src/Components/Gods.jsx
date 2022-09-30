import '../Style/Gods.css'
import { Link } from 'react-router-dom'
import logo from '../statics/images/Logo.png'

import { useState, useEffect } from 'react'
import lottie from 'lottie-web'

// importaciones de animaciones

import rea from '../Lottie/Mitologia/Rea.json'
import urano from '../Lottie/Mitologia/Urano.json'
import cronos from '../Lottie/Mitologia/Cronos.json'
import amaltea from '../Lottie/Mitologia/amaltea.json'
import zeus from '../Lottie/Mitologia/Zeus.json'

const Gods = ({ Count }) => {
  // estado de carga de componente
  const [Show, setShow] = useState(Count) //

  // estados animaciones

  const [play1, setPlay1] = useState(false)

  // funcion

  const Nav = () => {
    return (
      <nav className='menu-text'>
        <picture>
          <img src={logo} alt='' />
        </picture>
        <article>
          <Link to='/mitologia' className='link-page'>
            Regresar
          </Link>
        </article>
      </nav>
    )
  }

  const Animation = ({ render, ID, move }) => {
    return (
      <section className='God'>
        {useEffect(() => {
          const Info = lottie.loadAnimation({
            container: document.getElementById(ID),
            renderer: 'html',
            loop: false,
            autoplay: play1,
            animationData: render
          })
          return () => Info.destroy() // optional clean up for unmounting
        }, [play1])}
        <div id={ID} onClick={move} />
      </section>
    )
  }

  // en pantalla

  if (Show === 'God-1') {
    return (
      <>
        <Nav />
        <Animation render={rea} ID='info-god-1' move={() => setPlay1(!play1)} />
      </>
    )
  } else if (Show === 'God-2') {
    return (
      <>
        <Nav />
        <Animation render={urano} ID='info-god-1' move={() => setPlay1(!play1)} />
      </>
    )
  } else if (Show === 'God-3') {
    return (
      <>
        <Nav />
        <Animation render={cronos} ID='info-god-1' move={() => setPlay1(!play1)} />
      </>
    )
  } else if (Show === 'God-4') {
    return (
      <>
        <Nav />
        <Animation render={amaltea} ID='info-god-1' move={() => setPlay1(!play1)} />
      </>
    )
  } else if (Show === 'God-5') {
    return (
      <>
        <Nav />
        <Animation render={zeus} ID='info-god-1' move={() => setPlay1(!play1)} />
      </>
    )
  }
}

export default Gods
