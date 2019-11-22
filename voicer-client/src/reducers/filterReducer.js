import Fuse from "fuse.js";

// Actions
import {
    FILTER_SEARCH,
    FILTER_SORT,
    FILTER_PAYMENT,
    FILTER_STARS,

    SET_PAYMENT,
    SET_SEARCH,
    SET_SORT,
    SET_STAR,
    SET_STORED_DATA,

    SET_SORT_KEY,
    SET_SEARCH_KEY
} from '../actions/filterData';

// State
const initialState = {
    filteredData: [],
    isFiltering: false,
    searchState: '',
    sortState: "alpha",
    paymentState: "Paypal",
    starState: 3,
    sortKey: 'alpha',
    searchKey: '',
    storedData: []
}

// Main reducer
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
        case SET_STORED_DATA:
            return {
                ...state,
                storedData: action.payload
            }

        // Set table keys for filtering
        case SET_SORT_KEY:
            return {
                ...state,
                sortKey: action.payload
            }
        case SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
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

// Filtering functions
const searchFunction = (state) => {
    
    const fuseOptions = {
        shouldSort: true,
        //Threshold is search accuracy
        threshold: 0.4,
        location: 0,
        distance: 50,
        maxPatternLength: 12,
        minMatchCharLength: 3,
        // Keys to search
        keys: [...state.searchKey]
    };

    // Setup fuse using data and fuseOptions as search options
    const fuse = new Fuse(state.storedData, fuseOptions)
    // Return searched list
    const searchedData = fuse.search(state.searchState)
    return (searchedData.length) ? searchedData : state.storedData
}

const sortFunction = (state) => {
    
    let sortedData = [...state.filteredData]
        
    switch(state.sortState) {

        // Alphabetical
        case 'alpha':
            sortedData.sort((x,y) => (y[state.sortKey] > x[state.sortKey]) ? -1 : 1);
            return sortedData;

        // Most recent
        case 'recent':
            // Sorts by descending order
            sortedData.sort((x,y) => (x[state.sortKey] + y[state.sortKey]));
            return sortedData;

        // User rating
        case 'rating':
             // Sorts by descending order
            sortedData.sort((x,y) => (x[state.sortKey] + y[state.sortKey]));
            return sortedData;
        default:
            return sortedData;
    }
}