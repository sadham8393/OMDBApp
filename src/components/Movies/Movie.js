import React from 'react';
import { NO_IMAGE_URl} from '../../utils/constants';
import PropTypes from 'prop-types';

const Movie = (props) =>{
    let image = props.movie.Poster &&  props.movie.Poster !== "N/A" ? <img className = "movie-img" src = {props.movie.Poster} alt = {props.movie.Title} />
                                     : <img className = "movie-img" src = {NO_IMAGE_URl} alt = {props.movie.Title} />;
    return (
        <div className = "col s12 m6 l3 movies-card">
            <div className = "card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        image
                    }
                </div>
                <div className="card-content">
                    <p><span className = "card-list-title">Title :</span> {props.movie.Title}</p>
                    <p><span className = "card-list-title">Year :</span> {props.movie.Year}</p>
                    <p><span className = "card-list-title">IMDB ID :</span> {props.movie.imdbID}</p>
                    <p><span className = "card-list-title">Type :</span> {props.movie.Type}</p>
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = { 
    image: PropTypes.string, 
    movieTitle: PropTypes.string,
    movie : PropTypes.object
} 

export default Movie;