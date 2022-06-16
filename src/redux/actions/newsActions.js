import axios from "axios";
import { BASE_URL } from "../../utilis/constants";
import { FETCH_NEWS } from "./types";

const key = process.env.REACT_APP_API;

export const fetchNews = () => async dispatch => {
    try {
        const { data } = await axios.get(`${BASE_URL}${key}`)

        dispatch(
            {
                type: FETCH_NEWS, payload: data.articles
            }
        )
    } catch (error) {
        console.log(error.message)
    }
}
