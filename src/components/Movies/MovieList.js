import React from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';

const MovieList = (props) =>{
    return (
        <div className ="container movies-container">
            <div className = "row">
                <div className = "col s12">
                    {
                        props.movies.map((movie, i ) => {
                            return (
                                <Movie key={i} movie = {movie} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

MovieList.propTypes = { 
    title: PropTypes.string
} 

export default MovieList;