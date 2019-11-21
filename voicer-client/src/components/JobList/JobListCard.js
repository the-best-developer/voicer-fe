import React from 'react';
import "../../App.scss";

// Styling
import 
{ JobListContainer,
  JobListButton, 
  JobListCardAction, 
  JobListCardActionItem, 
  JobListCardBody,
  JobListCardDetail,
  JobListCardDetails,
  JobListCardDetailItem,
  JobListCardHeader,
  Divider,
  CardName,
  CardTitle,
} 
from '../../styles/styledComponents/JobListCard';

// Component
const JobListCard = props => {

    const formatDate = (date) => {
      let newDate = new Date(date);
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let month = months[newDate.getMonth()]
      let day = newDate.getDate();
      let year = newDate.getFullYear();
      return(month.slice(0, 3) + ' ' + day + ', ' + year)
    }

    return (
        <JobListContainer>
            <JobListCardBody>
              <JobListCardHeader>
                <CardTitle>{props.jobData.jobTitle}</CardTitle>
                <CardName>{props.jobData.firstName + ' ' + props.jobData.lastName}</CardName>
                <Divider />
              </JobListCardHeader>
              <JobListCardDetails>
                <JobListCardDetail>
                  <JobListCardDetailItem>
                    <strong>JOB #</strong>
                  </JobListCardDetailItem>
                  <JobListCardDetailItem>
                    {props.jobData.jobId}
                  </JobListCardDetailItem>
                </JobListCardDetail>
                <JobListCardDetail>
                  <JobListCardDetailItem>
                    <strong>Language</strong>
                  </JobListCardDetailItem>
                  <JobListCardDetailItem>
                    English
                  </JobListCardDetailItem>
                </JobListCardDetail>
                <JobListCardDetail>
                  <JobListCardDetailItem>
                    <strong>Posted On</strong>
                  </JobListCardDetailItem>
                  <JobListCardDetailItem>
                    {formatDate(props.jobData.createdDate)}
                  </JobListCardDetailItem>
                </JobListCardDetail>
                <JobListCardDetail>
                  <JobListCardDetailItem>
                    <strong>Price</strong>
                  </JobListCardDetailItem>
                  <JobListCardDetailItem>
                    200$
                  </JobListCardDetailItem>
                </JobListCardDetail>
              </JobListCardDetails>
              <JobListCardAction>
                <JobListCardActionItem>
                    <JobListButton onClick={() => {
                      props.openModal(props.jobData);
                      props.toggle2();
                    }}>INFO</JobListButton>
                </JobListCardActionItem>
                <JobListCardActionItem>
                    <JobListButton className='btn-orange' onClick={() => {
                      props.openModal(props.jobData);
                      props.toggle();
                    }}>Apply</JobListButton>
                </JobListCardActionItem>
              </JobListCardAction>
            </JobListCardBody>
        </JobListContainer>
    );
};

export default JobListCard;