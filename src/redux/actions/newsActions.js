import axios from "axios";
import { BASE_URL } from "../../utilis/constants";
import { FETCH_NEWS } from "./types";

const key = process.env.REACT_APP_API;

export const fetchNews = (page) => async dispatch => {
    try {
        const { data } = await axios.get(`${BASE_URL}page=${page}&country=us&apiKey=${key}`)

        dispatch(
            {
                type: FETCH_NEWS, payload: data
            }
        )
    } catch (error) {
        console.log(error.message)
    }
}
