import '../Style/Footer.css'
import logoNegativo from '../statics/images/zeus-negativo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='background'>
        <div className='container-info'>
          <div className='logo-footer'>
            <img src={logoNegativo} alt='' />
          </div>
          <div className='navegacion'>
            <a href='#Home'>Inicio</a>
            <a href='#About'>Nosotros</a>
            <a href='#Proyect'>Proyecto</a>
            <a href='#Reviews'>Personajes</a>
            <a href='#Comic'>Cómic</a>
            <a href='#Contact'>Información</a>
          </div>
          <div className='copiray'>
            <p>Todo los derechos reservados &copy; Zeus 2022</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
