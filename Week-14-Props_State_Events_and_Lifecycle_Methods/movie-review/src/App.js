import { useState } from 'react'
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/movieList';
import freakyfriday from './assets/freaky-friday.png';
import everything from './assets/everything.jpg'


const App = () => {
	const [movies, setMovies] = useState([        {
            "Title": "Freaky Friday",
            "Year": "2003",
            // "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": freakyfriday,
            "id": 1
        },
        {
            "Title": "Everything Everywhere All at Once",
            "Year": "2022",
            // "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": everything,
            "id": 2
        },
        {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            "id": 3
        }]);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        <MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;
