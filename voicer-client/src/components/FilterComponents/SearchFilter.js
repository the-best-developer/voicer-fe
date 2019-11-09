import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Label } from 'reactstrap';
import Fuse from "fuse.js";

// Styling
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-weight: bold;
`

const searchData = (data, keys, word) => {

    const fuseOptions = {
        shouldSort: true,
        //Threshold is search accuracy
        threshold: 0.4,
        location: 0,
        distance: 50,
        maxPatternLength: 12,
        minMatchCharLength: 3,
        // Keys in object to searched for keywords
        keys: [...keys],
    };

    // Setup fuse using data and fuseOptions as search options
    const fuse = new Fuse(data, fuseOptions)
    // Return searched list
    const searchedData = fuse.search(word)
    return (word.length) ? searchedData : data;
}

// Component
class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: ""
        }
    }

    setSearch = word => {
        this.setState({ searchBy: word })
    }


    render() {
        return (
            <MainDiv>
                <Label>Search:</Label>
                <Input value={this.state.searchBy} onChange={(e) => {
                    this.setSearch(`${e.target.value}`)
                    this.props.updateData(searchData(this.props.data, this.props.keys, e.target.value))
                }} />
            </MainDiv>
        );
    };
};

export default SearchFilter;