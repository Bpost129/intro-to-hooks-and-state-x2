import { useState } from "react"
import { sculptureList } from "./data"


const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  let sculpture = sculptureList[index]

  function handleClickNext() {
    if (index < (sculptureList.length - 1)) setIndex(index + 1)
  }

  function handleClickPrev() {
    if (index > 0) setIndex(index - 1)
  }

  function handleClickMore() {
    setShowMore(!showMore)
  }

  return (
    <div className='card'>
      <div>
        <button onClick={handleClickPrev}>
          Prev
        </button>
        <button onClick={handleClickNext} >
          Next
        </button>
      </div>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleClickMore}>
        {showMore ? 'Hide' : 'Show'} Details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  )
}

export default Gallery