import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
        <div>
            <MoviePoster />
            <h1> this is movie app</h1>
        </div>
        )}
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://images-na.ssl-images-amazon.com/images/I/51f27FNfzUL.jpg"/>
        )
    }
}
export default Movie