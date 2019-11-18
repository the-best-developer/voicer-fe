import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';
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
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ClientListContainer>
          <ClientListCardBody>
            <ClientListCardHeader>
              <ClientCardTitle>{this.props.jobData.jobTitle}</ClientCardTitle>
            </ClientListCardHeader>
            <Divider/>
            <ClientListCardDetails>
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
                    <ClientListButton className='btn-orange' onClick={setJobId(this.props.jobData.jobId)}>
                      Find Talent
                    </ClientListButton>
                  </Link>
                </ClientListCardActionItem>
                <ClientListCardActionItem>
                  <Link to="/client/applicationlist">
                    <ClientListButton onClick={setJobId(this.props.jobData.jobId)}>
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
  jobs: state.getJobsReducer.jobs,
  filteredData: state.filterReducer.filteredData,
})

export default connect(
  mapStateToProps,
  { setJobId }
)(ClientJobListCard);