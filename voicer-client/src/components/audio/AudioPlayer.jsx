import React, {useState} from 'react'
import ReactPlayer from 'react-player'


const AudioPlayer = ({samples}) => {

  const [sampleIndex, setSampleIndex] = useState(0)
  const [sampleLength, setSampleLength] = useState(samples.length)

  const nexthandler = (e) => {
    e.preventDefault()
    if(sampleIndex === (sampleLength - 1)){
      setSampleIndex(0)
    }else{
      setSampleIndex(sampleIndex+1)
    }
  } 

  const prevhandler = (e) => {
    e.preventDefault()
    if(sampleIndex === 0){
      setSampleIndex(sampleLength - 1)
    }else{
      setSampleIndex(sampleIndex - 1)
    }
  } 

  console.log(samples, sampleIndex, sampleLength)
  return(<>
    <div className="title">
      <p>{samples[sampleIndex].title}</p>
    </div>
    <div className="carousel">
      {sampleLength > 1 && (
        <button
          onClick={(e)=>prevhandler(e)}
        >&larr;</button>
      )}
      <div className="description">
        <p>{samples[sampleIndex].description}</p>
        <p>Attributes</p>
      </div>
      {sampleLength > 1 && (
        <button
          onClick={(e)=>nexthandler(e)}
        >&rarr;</button>
      )}
    </div>
    <ReactPlayer 
      url='/assets/audio/winamp.mp3'
      className="player"
      playing={false} 
      controls={true} 
      width="100%"
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