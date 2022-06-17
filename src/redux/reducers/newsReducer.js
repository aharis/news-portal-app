import { FETCH_NEWS } from "../actions/types"

const initialState = {
    news: [],
    loading: false
};

export const newsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.payload.articles],
                totalResults: action.payload.totalResults
            };
            
        default:
            return state;
    }
}