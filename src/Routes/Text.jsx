import { useParams } from 'react-router-dom'
import Gods from '../Components/Gods'

const library = [
  {
    text: 'rea',
    comp: <Gods Count='God-1' />
  },
  {
    text: 'urano',
    comp: <Gods Count='God-2' />
  },
  {
    text: 'cronos',
    comp: <Gods Count='God-3' />
  },
  {
    text: 'amaltea',
    comp: <Gods Count='God-4' />
  },
  {
    text: 'zeus',
    comp: <Gods Count='God-5' />
  }

]

const Text = () => {
  const { textInformation = '' } = useParams()

  const uniqueFilter = library.find((cap) => (
    cap.text === String(textInformation)
  ))

  return (
    <>
      {uniqueFilter.comp}
    </>
  )
}

export default Text
