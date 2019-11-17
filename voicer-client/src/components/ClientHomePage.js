import React from 'react';
import TalentList from './TalentList/TalentList';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTalent } from '../actions'
import FilterComponent from './FilterComponents/FilterComponent';
import { filterData, dataToFilter, setSearchKey, setSortKey } from '../actions/filterData';

const HomePage = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class ClientHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getTalent()
        await this.props.dataToFilter(this.props.talent)
        await this.props.filterData()
    }

    render() {
        return(
            <HomePage>
                <FilterComponent />
                <TalentList talent={this.props.filteredData} />
            </HomePage>
        )
    }
}

const mapStateToProps = state => ({
    talent: state.getTalentReducer.talent,
    filteredData: state.filterReducer.filteredData
})

export default connect(
    mapStateToProps,
    { dataToFilter, getTalent, filterData, setSortKey, setSearchKey }
)(ClientHomePage);