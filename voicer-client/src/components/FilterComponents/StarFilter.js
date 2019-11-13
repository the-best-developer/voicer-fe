import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Label } from 'reactstrap';
import { connect } from 'react-redux';
import { filterData, setStar } from '../../actions/filterData';

// Styling
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
`

// Component
class StarFilter extends Component {
    constructor(props) {
        super(props);
    }

    stars = starsNum => {
        let starsArray = [];
        for (let i = 0 ; i < starsNum ; i++) {
            starsArray.push(<FontAwesomeIcon icon={faStar} color="yellow" size={"2x"} onClick={_ => this.props.setStar(i + 1)} />)
        }
        for (let i = starsNum ; i < 5 ; i++) {
            starsArray.push(<FontAwesomeIcon icon={faStar} color="grey" size={"2x"} onClick={_ => this.props.setStar(i + 1)} />)
        }
        
        return starsArray;
    }

    render() {
        return (
            <MainDiv>
                <Label>Stars:</Label>
                <div>
                    {this.stars(this.props.starState)}
                </div>
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    starState: state.filterReducer.starState
});

export default connect(mapStateToProps, { filterData, setStar } )(StarFilter);