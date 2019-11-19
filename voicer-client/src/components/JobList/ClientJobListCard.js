import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setJobId } from '../../actions';
import styled from 'styled-components';
import { Card, Button, CardBody } from 'reactstrap';
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
  ClientCardContainer
} from '../../styles/styledComponents/ClientListCard';

// Component
class ClientJobListCard extends React.Component {
  constructor(props) {
    super(props)
  }

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
      <ClientCardContainer>
          <ClientListCardBody>
            <ClientListCardHeader>
              <ClientCardTitle>{this.props.jobData.jobTitle}</ClientCardTitle>
              <CardName>Applications: {this.props.jobData.appCount}</CardName>
              <Divider/>
            </ClientListCardHeader>
            <ClientListCardDetails>
              <ClientListCardDetail>
                <ClientListCardDetailItem>
                  <strong>Status</strong>
                </ClientListCardDetailItem>
                <ClientListCardDetailItem>
                  {this.props.jobData.status}
                </ClientListCardDetailItem>
              </ClientListCardDetail>
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
      </ClientCardContainer>
  );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  { setJobId }
)(ClientJobListCard);