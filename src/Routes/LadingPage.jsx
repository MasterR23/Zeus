import { lazy, Suspense, useState } from 'react'

import Nav from '../Components/NavPage'
import Loading from '../Components/Loading'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Information from '../Components/Information'
import View from '../Components/Modal'

const AboutUs = lazy(() => import('../Components/About'))
const Proyect = lazy(() => import('../Components/Proyect'))
const Reviews = lazy(() => import('../Components/Reviews'))
const SectionComic = lazy(() => import('../Components/ComicPage'))

const LandingPage = () => {
  const [show, setShow] = useState('load')

  if (show === 'load') {
    setTimeout(() => {
      setShow('Page')
    }, 300)
    return <Loading />
  } else {
    return (
      <>
        <View />
        <Nav />
        <Home />
        <Suspense fallback={<Loading />}>
          <AboutUs />
          <Proyect />
          <Reviews />
          <SectionComic />
        </Suspense>
        <Information />
        <Footer />
      </>
    )
  }
}

export default LandingPage
