import {
    FETCH_TRENDING_MOVIES, FETCH_TV_MOVIES, RESET_RESPONSE
} from '../utils/constants';

export const getTrendingList = (pageNumber) => ({
    type: FETCH_TRENDING_MOVIES,
    pageNumber
});

export const getMoviesList = (queryParams) => ({
    type: FETCH_TV_MOVIES,
    queryParams
});

export const resetResponse = () => {
    return {
        type: RESET_RESPONSE
    };
}