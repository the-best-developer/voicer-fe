import styled from "styled-components";
import { Card, Button, CardBody } from "reactstrap";

export const ClientCardContainer = styled(Card)`
  width: 100%;
  margin: 4vh 0;
  min-height: 200px;
  padding: 5px;
  border: 1px solid #707070 !important;
  border-radius: 10px !important;
  background-color: #EFF1F3 !important;
  box-shadow: 2px 2px 5px 4px rgba(130, 130, 130, 0.2);
`

export const ClientListCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 10vh;
`;

export const CardName = styled.div`
  padding-right: 10px;
  font-family: 'Nunito Sans', sans-serif ;
  font-size: 1.0rem;
  font-weight: 800;
`;

export const ClientCardTitle = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const ClientListButton = styled(Button)`
  width: 100%;
  margin: 3px;
`

export const ClientListCardBody = styled(CardBody)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin: 0;
    display:block; /* for use on default inline elements like span */
    overflow: hidden;
    background-color: #717F86;
`;

export const ClientListCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  padding-left: 10px;
`

export const ClientListCardDetail = styled.div`
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
`;

export const ClientListCardDetailItem = styled.div`
  width: 100%;
  text-align: left;
`;

export const ClientListCardAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  width: 22.5%;
`

export const ClientListCardActionItem = styled.div`
  width: 100%;
  text-align: left;
`;