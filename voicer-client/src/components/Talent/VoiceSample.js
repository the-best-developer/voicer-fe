import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

// Styling
const SampleBox = styled.div`
  margin: 1rem 0 2rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
`

const VoiceSample = props => {
  return (
    <SampleBox>
      <p>{props.sample.description ? props.sample.description : 'Sample'}</p>

      <ReactPlayer
      url={props.sample.url}
      controls
      height={60}
      />
    </SampleBox>
  )
}

export default VoiceSample;
