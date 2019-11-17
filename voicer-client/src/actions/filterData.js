// Actions to modify state.filteredData
export const FILTER_SEARCH = 'FILTER_SEARCH';
export const FILTER_SORT = 'FILTER_SORT';
export const FILTER_PAYMENT = 'FILTER_PAYMENT';
export const FILTER_STARS = 'FILTER_STARS';

// Actions to set state at the corresponding reducer (ex. state.searchState)
export const SET_PAYMENT = 'SET_PAYMENT';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SORT = 'SET_SORT';
export const SET_STAR = 'SET_STAR';
export const SET_STORED_DATA = 'SET_STORED_DATA';

// Key values for filtering data
export const SET_SORT_KEY = 'SET_SORT_KEY';
export const SET_SEARCH_KEY = 'SET_SEARCH_KEY';

// Calls action creators for all filtering functions
// After this function has executed, the filtered data is stored in state.filteredData
export const filterData = () => (dispatch) => {
    dispatch({ type: FILTER_SEARCH });
    dispatch({ type: FILTER_SORT });
    dispatch({ type: FILTER_PAYMENT });
    dispatch({ type: FILTER_STARS });
};

// Set state.storedData to be used as the base dataset to be filtered over
export const dataToFilter = (data) => (dispatch) => {
    dispatch({ type: SET_STORED_DATA,  payload: data});
}

// Set state for each filtering component to be used by the corresponding reducers
export const setPayment = (data) => (dispatch) => {
    dispatch({ type: SET_PAYMENT,  payload: data});
}

export const setSearch = (data) => (dispatch) => {
    dispatch({ type: SET_SEARCH,  payload: data});
}

export const setSort = (data) => (dispatch) => {
    dispatch({ type: SET_SORT,  payload: data});
}

export const setStar = (data) => (dispatch) => {
    dispatch({ type: SET_STAR,  payload: data});
}

export const setSortKey = (data) => (dispatch) => {
    dispatch({ type: SET_SORT_KEY,  payload: data});
}

export const setSearchKey = (data) => (dispatch) => {
    dispatch({ type: SET_SEARCH_KEY,  payload: data});
}