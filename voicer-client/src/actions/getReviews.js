import axiosWithAuth from "../components/axiosAuth";
import jwt from "jsonwebtoken";
import { dbUrl } from "./index";
//replace dbUrl in index.js to change backend server for testing

export const GET_AUTHORED_REVIEWS_START = "GET_AUTHORED_REVIEWS_START";
export const GET_AUTHORED_REVIEWS_SUCCESS = "GET_AUTHORED_REVIEWS_SUCCESS";
export const GET_AUTHORED_REVIEWS_FAILURE = "GET_AUTHORED_REVIEWS_FAILURE";

export const GET_RECEIVED_REVIEWS_START = "GET_AUTHORED_REVIEWS_START";
export const GET_RECEIVED_REVIEWS_SUCCESS = "GET_AUTHORED_REVIEWS_SUCCESS";
export const GET_RECEIVED_REVIEWS_FAILURE = "GET_AUTHORED_REVIEWS_FAILURE";

export const getAuthoredReviews = () => dispatch => {
    let authorId = jwt.decode(localStorage.getItem("token")).userId;
    dispatch({ type: GET_AUTHORED_REVIEWS_START });
    axiosWithAuth()
        .get(`${dbUrl}/api/reviews/authored/${authorId}`)
        .then(res => {
            dispatch({
                type: GET_AUTHORED_REVIEWS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_AUTHORED_REVIEWS_FAILURE,
                payload: err
            });
        });
};


export const getReceivedReviews = () => dispatch => {
    let recipientId = jwt.decode(localStorage).getItem("token").userId;
    dispatch({ type: GET_RECEIVED_REVIEWS_START });
    axiosWithAuth()
        .get(`${dbUrl}/api/reviews/received/${recipientId}`)
        .then(res => {
            dispatch({
                type: GET_RECEIVED_REVIEWS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_RECEIVED_REVIEWS_FAILURE,
                payload: err
            });
        });
}