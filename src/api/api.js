import { MOVIEDB_PATH } from '../utils/constants';
import axios from 'axios';


export function fetchTrendingListApi(pageNumber) {
    return axios.get(`${MOVIEDB_PATH}&page=${pageNumber}`)
    .then(response => {
        return response.data 
    })
    .catch(error => {
        if(error.response){
            throw error.response.data.status_message;
        } else if(error.message){
            throw error.message;
        }
    });
}

export function fetchMoviesApi({tvMovieType, searchterm, pageNumber }) {
    return axios.get(`${MOVIEDB_PATH}&s=${searchterm}&page=${pageNumber}`)
    .then(response => {
        return response.data 
    })
    .catch(error => {
        if(error.response){
            throw error.response.data.status_message;
        } else if(error.message){
            throw error.message;
        }
    });
}