import { useState } from "react"
import { sculptureList } from "./data"


const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  let sculpture = sculptureList[index]

  function handleClickNext() {
    setIndex(index + 1)
  }

  function handleClickMore() {
    setShowMore(!showMore)
  }

  return (
    <div className='card'>
      <button onClick={handleClickNext} >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button>
        Show Details
      </button>
      <p>{sculpture.description}</p>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  )
}

export default Gallery