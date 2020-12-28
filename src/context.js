import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const AppContext = createContext();
const {Provider} = AppContext;
function ContextProvider({children}) {
    const [movies, setMovies] = useState([]);
    //const apiurl = "https://www.omdbapi.com/?apikey=1dfa35e4";
    const starWar = "https://www.omdbapi.com/?apikey=1dfa35e4&s=star wars";
    useEffect(() => {
        axios(starWar)
            .then(results => {
                let movieData = results.data.Search;
                console.log(movieData);
                setMovies(movieData);
        })
      }, [])
   
    return (
        <Provider value={movies}>
            {children}
        </Provider>
    )
    
}

export default ContextProvider;