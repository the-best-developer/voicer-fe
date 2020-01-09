import React from 'react';
import ReactPlayer from 'react-player';

const VoiceSample = props => {
  return (
    <>
      <h2>{props.sample.description ? props.sample.description : 'Sample'}</h2>
      <ReactPlayer
      url={props.sample.url}
      controls
      height={80}
      />
    </>
  )
}

export default VoiceSample;
