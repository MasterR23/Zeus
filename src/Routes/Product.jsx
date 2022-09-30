import { lazy, Suspense } from 'react'
import Loading from '../Components/Loading'

const Chapter = lazy(() => import('../Components/ChaptersPage'))

const ProductComic = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Chapter />
      </Suspense>
    </>

  )
}

export default ProductComic
