import React, { Component } from 'react';
import TalentListCard from './TalentListCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setJobId, getTalent } from '../../actions';
import FilterComponent from '../FilterComponents/FilterComponent';
import '../../styles/_colors.scss';
import { Divider } from '../../styles/styledComponents/ClientListCard';

// Styling
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 19vh;
    min-height: 65vh;
`

const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 2rem;
    padding: 10px;
    h1 {
        color: #FF934F;
        font-size: 2rem;
        margin-top: 5vh;
        letter-spacing: 1px;
    }
`

// Component
class TalentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTalent: {},
            modalIsOpen: false,
            modalIsOpen2: false,
        }
    }

    componentDidMount = () => {
        this.props.getTalent()
    }

    openModal = talent => {
        this.setState({
            activeTalent: talent,
        })
    }

    toggle = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    toggle2 = () => {
        this.setState({
            modalIsOpen2: !this.state.modalIsOpen2
        })
    }

    render() {
        return (
            <MainDiv>
                <FilterComponent />
                <ListDiv>
                    <h1>AVAILABLE TALENTS</h1>
                    <Divider />
                    {this.props.talent.map(talent =>
                        <TalentListCard
                            talentData={talent}
                            openModal={this.openModal}
                            toggle={this.toggle}
                            toggle2={this.toggle2}
                        />
                    )}
                </ListDiv>
            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent
})

export default connect(
  mapStateToProps,
  { setJobId, getTalent }
)(TalentList);
