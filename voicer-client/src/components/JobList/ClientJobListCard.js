import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setJobId } from '../../actions';
import "../../App.scss";

// Styling
import {
  Divider,
  CardName,
  ClientCardTitle,
  ClientListButton,
  ClientListCardAction,
  ClientListCardActionItem,
  ClientListCardBody,
  ClientListCardDetail,
  ClientListCardDetailItem,
  ClientListCardDetails,
  ClientListCardHeader,
  ClientListContainer
} from '../../styles/styledComponents/ClientListCard';

// Component
class ClientJobListCard extends React.Component {

  formatDate = (date) => {
    let newDate = new Date(date);
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[newDate.getMonth()]
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    return(month.slice(0, 3) + ' ' + day + ', ' + year)
  }

  render() {
    return (
      <ClientListContainer>
          <ClientListCardBody>
            <ClientListCardHeader>
              <ClientCardTitle>{this.props.jobData.jobTitle}</ClientCardTitle>
              <CardName>{this.props.jobData.firstName + ' ' + this.props.jobData.lastName}</CardName>
              <Divider/>
            </ClientListCardHeader>
            <ClientListCardDetails>
              <ClientListCardDetail>
                <ClientListCardDetailItem>
                  <strong>JOB #</strong>
                </ClientListCardDetailItem>
                <ClientListCardDetailItem>
                  {this.props.jobData.jobId}
                </ClientListCardDetailItem>
              </ClientListCardDetail>
              <ClientListCardDetail>
                <ClientListCardDetailItem>
                  <strong>Language</strong>
                </ClientListCardDetailItem>
                <ClientListCardDetailItem>
                {this.props.jobData.language}
                </ClientListCardDetailItem>
              </ClientListCardDetail>
              <ClientListCardDetail>
                <ClientListCardDetailItem>
                  <strong>Posted On</strong>
                </ClientListCardDetailItem>
                <ClientListCardDetailItem>
                  {this.formatDate(this.props.jobData.createdDate)}
                </ClientListCardDetailItem>
              </ClientListCardDetail>
              <ClientListCardDetail>
                <ClientListCardDetailItem>
                  <strong>Price</strong>
                </ClientListCardDetailItem>
                <ClientListCardDetailItem>
                  {this.props.jobData.initialPrice}
                </ClientListCardDetailItem>
              </ClientListCardDetail>
            </ClientListCardDetails>
            <ClientListCardAction>
                <ClientListCardActionItem>
                  <Link to="/client/talentlist">
                    <ClientListButton className='btn-orange' onClick={this.props.setJobId(this.props.jobData.jobId)}>
                      Find Talent
                    </ClientListButton>
                  </Link>
                </ClientListCardActionItem>
                <ClientListCardActionItem>
                  <Link to="/client/applicationlist">
                    <ClientListButton onClick={this.props.setJobId(this.props.jobData.jobId)}>
                      Applications
                    </ClientListButton>
                  </Link>
                </ClientListCardActionItem>
            </ClientListCardAction>
          </ClientListCardBody>
      </ClientListContainer>
  );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  { setJobId }
)(ClientJobListCard);