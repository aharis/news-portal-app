import axios from "axios";
import { BASE_URL } from "../../utilis/constants";
import { CLEAR_NEWS, FETCH_NEWS, SET_PAGE, SET_TERM  } from "./types";

const key = process.env.REACT_APP_API;

export const fetchNews = (page, term) => async dispatch => {
    try {
        const { data } = await axios.get(`${BASE_URL}q=${term ? term : ''}&page=${page}&country=us&apiKey=${key}`);
        
        dispatch(
            {
                type: FETCH_NEWS,
                 payload: data
            }
        )
    } catch (error) {
        console.log(error.message)
    }
}


export const clearNews = () => {
    return (
      {
        type: CLEAR_NEWS,
        payload: []
      }
    )
  }
  
  export const setTerm = (term) => {
    console.log(term)
    return (
      {
        type: SET_TERM,
        payload: term
      }
    )
  }
  
  export const setPage = (page) => {
    return (
      {
        type: SET_PAGE,
        payload: page
      }
    )
  }
  
