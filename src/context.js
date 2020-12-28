import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const AppContext = createContext();
const {Provider} = AppContext;
function ContextProvider({children}) {
    //star wars
    const [movies, setMovies] = useState([]);
    const [films, setFilms] = useState();
    const [searchValue, setSearchValue] = useState('');
    //const [searchParam, setSearchParam] = useState({s: ''});
    const apiurl = `https://www.omdbapi.com/?apikey=1dfa35e4&s=${searchValue}`;
    const starWar = "https://www.omdbapi.com/?apikey=1dfa35e4&s=star wars";

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
        axios(apiurl)
            .then(results => {
                let movieData = results.data.Search;
                console.log(movieData);
                setFilms(movieData);
        })
      
    }

    useEffect(() => {
        axios(starWar)
            .then(results => {
                let movieData = results.data.Search;
                console.log(movieData);
                setMovies(movieData);
        })
      }, [])

     
   
    return (
        <Provider value={{movies, films, handleChange, searchValue, handleSubmit}}>
            {children}
        </Provider>
    )
    
}

export default ContextProvider;