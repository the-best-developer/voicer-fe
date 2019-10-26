import React from 'react';

const JobListCard = props => {

    return (
      <div>
          <h1> I'm a Job card! {props.jobData.jobTitle}</h1>
      </div>
    );
};

export default JobListCard;