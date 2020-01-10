import React, { Component } from 'react';
import TalentListCard from './TalentListCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setJobId, getTalents } from '../../actions';
import { getVoiceSamples } from '../../actions/getVoiceSamples';
import FilterComponent from '../FilterComponents/FilterComponent';
import '../../styles/_colors.scss';
import { Divider } from '../../styles/styledComponents/ClientListCard';
import TalentInfo from '../TalentInfo';

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
            activeSamples: [],
            modalIsOpen: false,
            modalJobInfoIsOpen: false,
        }
    }

    componentDidMount = () => {
        this.props.getTalents()
    }

    openModal = async (talent) => {
        let samples = await this.props.getVoiceSamples(talent.userId)
        await this.setState({
            activeTalent: talent,
            activeSamples: samples
        })
    }

    sendInvite = (email) => {
      window.location.href = `mailto:${email}`;
    }

    toggleInfo = async () => {
        await this.setState({
            modalJobInfoIsOpen: !this.state.modalJobInfoIsOpen
        })
    }

    render() {
        return (
            <MainDiv>
                <FilterComponent />
                <ListDiv>
                    <h1>AVAILABLE TALENTS</h1>
                    <Divider />
                    {this.props.talents.map(talent =>
                        <TalentListCard
                            talentData={talent}
                            openModal={this.openModal}
                            sendInvite={this.sendInvite}
                            toggleInfo={this.toggleInfo}
                        />
                    )}
                </ListDiv>

                {this.state.activeTalent.userId ? 
                <TalentInfo
                    toggle={this.toggleInfo}
                    isOpen={this.state.modalJobInfoIsOpen}
                    talent={this.state.activeTalent}
                    samples={this.state.activeSamples}
                /> : null}

            </MainDiv>
        );
    };
};

const mapStateToProps = state => ({
    talents: state.getTalentsReducer.talents
})

export default connect(
  mapStateToProps,
  { setJobId, getTalents, getVoiceSamples }
)(TalentList);
