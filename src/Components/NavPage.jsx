import '../Style/NavPage.css'
import logo from '../statics/images/Logo.png'
import icon from '../statics/images/pagina-de-inicio.png'
import menu from '../statics/images/menu.png'
import { useState } from 'react'

const Nav = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className='nav'>
      <picture className='logo'><img src={logo} /></picture>
      <picture className='menu'> <img
        src={menu} alt='' onClick={() => {
          setShow(!show)
        }}
                                 />
      </picture>
      <menu className='nav-links'>
        <a href='#Home'> <img src={icon} alt='icon' /> Inicio</a>
        <a href='#About'>Nosotros</a>
        <a href='#Proyect'>Proyecto</a>
        <a href='#Reviews'>Personajes</a>
        <a href='#Comic'>Cómic</a>
        <a href='#Contact'>Información</a>
      </menu>

      {show
        ? (
          <menu className='nav-links--mobile'>
            <a href='#Home'> Inicio</a>
            <a href='#About'>Nosotros</a>
            <a href='#Proyect'>Proyecto</a>
            <a href='#Reviews'>Personajes</a>
            <a href='#Comic'>Cómic</a>
            <a href='#Contact'>Información</a>
          </menu>
          )
        : (
            ''
          )}

    </nav>
  )
}

export default Nav
