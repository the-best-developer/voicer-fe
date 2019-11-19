import React, { Component } from 'react';
import TalentListCard from './TalentListCard'
import styled from 'styled-components'

// Styling
const MainDiv = styled.div`
  width: 65%;
  margin: 21vh 10px 0 10px;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px 10% 10px 10px;
  &:last-child {
      margin-bottom: 30px;
  }
`

// Component
class TalentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeJob: {},
            modalIsOpen: false,
            modalIsOpen2: false,
        }
    }

    openModal = job => {
        this.setState({
            activeJob: job,
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
                {this.props.talent.map(talent =>
                    <TalentListCard
                        talentData={talent}
                        openModal={this.openModal}
                        toggle={this.toggle}
                        toggle2={this.toggle2}
                    />
                )}
                {/* <ApplyToJob
                    toggle={this.toggle}
                    isOpen={this.state.modalIsOpen}
                    job={this.state.activeJob}
                />
                <JobInfo
                    toggle={this.toggle2}
                    isOpen={this.state.modalIsOpen2}
                    job={this.state.activeJob}
                /> */}
            </MainDiv>
        );
    };
};

export default TalentList
