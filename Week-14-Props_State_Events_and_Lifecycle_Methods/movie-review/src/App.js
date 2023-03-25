import { useState } from 'react'
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MovieList';
import freakyfriday from './assets/freaky-friday.png';
import everything from './assets/everything.jpg'; 
import glassonion from './assets/glass-onion.jpg';


const App = () => {
	const [movies, setMovies] = useState([        {
            "Title": "Freaky Friday",
            "Year": "2003",
            // "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": freakyfriday,
            "id": 1,
            "Synopsis": "Single mother Tess Coleman (Jamie Lee Curtis) and her teenage daughter Anna (Lindsay Lohan) couldn't be more different, and it is driving them both insane. After receiving cryptic fortunes at a Chinese restaurant, the two wake up the next day to discover that they have somehow switched bodies. Unable to switch back, they are forced to masquerade as one another until a solution can be found. In the process, they develop a new sense of respect and understanding for one another."
        },
        {
            "Title": "Everything Everywhere All at Once",
            "Year": "2022",
            // "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": everything,
            "id": 2,
            "Synopsis": "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance."
        },
        {
            "Title": "Glass Onion",
            "Year": "2022",
            "Type": "movie",
            "Poster": glassonion,
            "id": 3,
            "Synopsis": "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Benoit Blanc is put on the case."
        }]);
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
                <h1 className='m-5'>Movie Reviews!</h1>
        <MovieList movies={movies} />
			</div>
		</div> 
	);
};

export default App;
