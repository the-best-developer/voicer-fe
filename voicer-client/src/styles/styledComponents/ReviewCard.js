import styled from "styled-components";
import { Card, Button, CardBody } from "reactstrap";

export const ReviewContainer = styled(Card)`
  width: 100%;
  margin: 15px 0;
  padding: 5px;
  border: 1px solid #707070 !important;
  border-radius: 10px !important;
  background-color: #EFF1F3 !important;
  box-shadow: 2px 2px 5px 4px rgba(130, 130, 130, 0.2);
`

export const ReviewRating = styled.div`
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
`;

export const ReviewMessage = styled(CardBody)`
`;