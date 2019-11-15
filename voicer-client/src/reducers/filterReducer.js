import Fuse from "fuse.js";

import {
    FILTER_SEARCH,
    FILTER_SORT,
    FILTER_PAYMENT,
    FILTER_STARS,

    SET_PAYMENT,
    SET_SEARCH,
    SET_SORT,
    SET_STAR,
    SET_FILTER_DATA
} from '../actions/filterData';

const initialState = {
    filteredData: [],
    isFiltering: false,
    searchState: "",
    sortState: "alpha",
    paymentState: "Paypal",
    starState: 3
}

const searchFunction = (state) => {
    
    const fuseOptions = {
        shouldSort: true,
        //Threshold is search accuracy
        threshold: 0.4,
        location: 0,
        distance: 50,
        maxPatternLength: 12,
        minMatchCharLength: 3,
        // Keys in object to searched for keywords
        keys: ['jobTitle']//[...keys],
    };

    // Setup fuse using data and fuseOptions as search options
    const fuse = new Fuse(state.filteredData, fuseOptions)
    // Return searched list
    const searchedData = fuse.search(state.searchState)
    return (searchedData.length) ? searchedData : state.filteredData;
}

const sortFunction = (state) => {
    
    let sortedData = [...state.filteredData]
        
    switch(state.sortState) {
        case 'alpha':
            sortedData.sort((x,y) => (y['jobTitle'] > x['jobTitle']) ? -1 : 1);
            return sortedData;
        case 'num':
            sortedData.sort((x,y) => x - y);
            return sortedData;
        case 'reverseAlpha':
            sortedData.sort((x,y) => (y['jobTitle']> x['jobTitle']) ? -1 : 1).reverse();
            return sortedData;
        default:
            return sortedData;
        }
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        // Set filter state
        case SET_PAYMENT:
            return {
                ...state,
                paymentState: action.payload
            }
        case SET_SEARCH:
            return {
                ...state,
                searchState: action.payload
            }
        case SET_SORT:
            return {
                ...state,
                sortState: action.payload
            }
        case SET_STAR:
            return {
                ...state,
                starState: action.payload
            }
        case SET_FILTER_DATA:
            return {
                ...state,
                filteredData: [...action.payload]
            }

        // Filter the data
        case FILTER_SEARCH:
            return {
                ...state,
                filteredData: searchFunction(state)
            }

        case FILTER_SORT:
            return {
                ...state,
                filteredData: sortFunction(state)
            }
        default:
            return state;
    }
}