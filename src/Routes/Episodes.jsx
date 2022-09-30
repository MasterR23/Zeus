import { useParams } from 'react-router-dom'
import ChapterOne from '../Components/ChapterOne'
import ChapterTwo from '../Components/ChapterTwo'

const caps = [
  {
    num: 1,
    comp: <ChapterOne />
  },
  {
    num: 2,
    comp: <ChapterTwo />
  }
]

const Episodes = () => {
  const { numberEpisode = '' } = useParams()

  const uniqueFilter = caps.find((cap) => (
    cap.num === Number(numberEpisode)
  ))

  console.log(uniqueFilter)

  return (
    <>
      {uniqueFilter.comp}
    </>
  )
}

export default Episodes
