import React, {useState} from 'react'
import ReactPlayer from 'react-player'


const AudioPlayer = ({samples}) => {

  const [sampleIndex, setSampleIndex] = useState(0)
  const [sampleLength] = useState(samples.length)

  const nexthandler = (e) => {
    e.preventDefault()
    sampleIndex === (sampleLength - 1) ? setSampleIndex(0) : setSampleIndex(sampleIndex+1)
  } 

  const prevhandler = (e) => {
    e.preventDefault()
    sampleIndex === 0 ? setSampleIndex(sampleLength - 1) : setSampleIndex(sampleIndex - 1)
  } 

  console.log(samples, sampleIndex, sampleLength)
  return(<>
    <div className="title">
      <p>{`${sampleIndex+1}/${sampleLength} ${samples[sampleIndex].title}`}</p>
    </div>
    <div className="carousel">
        <button
          onClick={(e)=>prevhandler(e)}
        >&larr;</button>
      <div className="description">
        <p>{samples[sampleIndex].description}</p>
        <p>Attributes</p>
      </div>
        <button
          onClick={(e)=>nexthandler(e)}
        >&rarr;</button>
    </div>
    <ReactPlayer 
      url={samples[sampleIndex].s3_location}
      className="player"
      playing={false} 
      controls={true} 
      width="240px"
      height="20px"
      config={{
        file:{
          attributes:{
            controlslist: "nodownload"
          }
        }
      }}
    />
  </>)
  
}

export default AudioPlayer