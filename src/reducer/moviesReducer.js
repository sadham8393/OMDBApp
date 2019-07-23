import {
    FETCH_TRENDING_MOVIES, FETCH_TV_MOVIES, MOVIES_FETCHED_SUCCESS, MOVIES_FETCHED_ERROR, MOVIES_FETCHED_NO_RESULTS, 
    RESET_RESPONSE
} from '../utils/constants';

const initialState = {
    isLoading: false
};
  
export default function moviesReducer(state = initialState , action) {
    switch (action.type) {
        case FETCH_TRENDING_MOVIES:
            return Object.assign({}, state, { 
                ...state,
                isLoading: true
            });
        case MOVIES_FETCHED_SUCCESS:
            return Object.assign({}, state, { 
                ...state,
                isLoading: false,
                moviesList: action.moviesList,
                totalResults : action.totalResults,
                info : null,
                error : null
            });
        case MOVIES_FETCHED_ERROR:
            return Object.assign({}, state, { 
                ...state,
                isLoading: false,
                error: action.error,
                totalResults : 0
            });
        case FETCH_TV_MOVIES:
            return Object.assign({}, state, {
                ...state,
                isLoading: true
            });
        case MOVIES_FETCHED_NO_RESULTS:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                moviesList: action.moviesList,
                info : action.info,
                totalResults : 0
            });
        case RESET_RESPONSE:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                error: null,  
                info : null,
                moviesList: null,
                success : null
            });

        default:
            return state;
    }
}