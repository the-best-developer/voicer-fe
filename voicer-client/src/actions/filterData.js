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
export const SET_FILTER_DATA = 'SET_FILTER_DATA';

export const filterData = () => (dispatch) => {
    dispatch({ type: FILTER_SEARCH });
    dispatch({ type: FILTER_SORT });
    dispatch({ type: FILTER_PAYMENT });
    dispatch({ type: FILTER_STARS });
};

export const setFilterData = (data) => (dispatch) => {
    dispatch({ type: SET_FILTER_DATA,  payload: data});
}

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