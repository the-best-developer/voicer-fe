import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const ClientJobListCard = props => {
    return (
        <ClientListContainer>
            <ClientListCardBody>
              <ClientListCardDetails>
                <CardTitle>{props.jobData.jobTitle}</CardTitle>
                <CardSubtitle>{props.jobData.clientId}</CardSubtitle>
                <CardText>{props.jobData.jobDescription}</CardText>
              </ClientListCardDetails>
                <ClientListCardAction>
                    <ClientListCardActionItem>
                      <Link to="/client/talentlist"><ClientListButton>Find Talent</ClientListButton></Link>
                      <ClientListButton>View Applications</ClientListButton>
                    </ClientListCardActionItem>
                </ClientListCardAction>
            </ClientListCardBody>
        </ClientListContainer>
    );
};

export default ClientJobListCard;