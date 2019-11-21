import styled from "styled-components";
import { Card, Button, CardBody } from "reactstrap";

export const JobListContainer = styled(Card)`
  width: 100%;
  margin: 15px 0;
  min-height: 200px;
  padding: 5px;
  border: 1px solid #707070 !important;
  border-radius: 10px !important;
  background-color: #EFF1F3 !important;
  box-shadow: 2px 2px 5px 4px rgba(130, 130, 130, 0.2);
`

export const JobListCardHeader = styled.div`
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

export const CardTitle = styled.div`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const JobListButton = styled(Button)`
  width: 100%;
  margin: 3px;
  background-color: #DBD3D8;
`

export const JobListCardBody = styled(CardBody)`
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

export const JobListCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  padding-left: 10px;
`

export const JobListCardDetail = styled.div`
  width: 22%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
`;

export const JobListCardDetailItem = styled.div`
  width: 100%;
  text-align: left;
`;

export const JobListCardAction = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  width: 22.5%;
`

export const JobListCardActionItem = styled.div`
  width: 100%;
  text-align: left;
`;