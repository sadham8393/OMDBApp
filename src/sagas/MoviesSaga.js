import { fetchTrendingListApi, fetchMoviesApi } from '../api/api'
import { put, call} from 'redux-saga/effects';
import {
    MOVIES_FETCHED_SUCCESS, MOVIES_FETCHED_ERROR, 
    MOVIES_FETCHED_NO_RESULTS, NO_RESULTS_FOUND
} from '../utils/constants';

export function* fetchTrendingMovies(action) {
    let {pageNumber} = action;
    try {
        const payload = yield call(fetchTrendingListApi, pageNumber);
        yield put({ type: MOVIES_FETCHED_SUCCESS, moviesList: payload });
    } catch (error) {
        yield put({ type: MOVIES_FETCHED_ERROR, error });
    }
}

export function* fetchTvMovies(action) {
    try {
        const payload = yield call(fetchMoviesApi, action.queryParams);
        if(payload.totalResults > 0){
            yield put({ type: MOVIES_FETCHED_SUCCESS, moviesList: payload.Search, totalResults:payload.totalResults});
        } else {
            yield put({ type: MOVIES_FETCHED_NO_RESULTS, moviesList: payload, info: NO_RESULTS_FOUND });
        }
    } catch (error) {
        yield put({ type: MOVIES_FETCHED_ERROR, error });
    }
}