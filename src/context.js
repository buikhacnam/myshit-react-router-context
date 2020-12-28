import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const AppContext = createContext();
const {Provider} = AppContext;
function ContextProvider({children}) {
    //star wars
    const [movies, setMovies] = useState([]);
    const [films, setFilms] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [searchParam, setSearchParam] = useState('');
    //const apiurl = `https://www.omdbapi.com/?apikey=1dfa35e4&s=${searchValue}`;
    const apiUrl2 = 'https://www.omdbapi.com/?apikey=1dfa35e4';
    const starWar = "https://www.omdbapi.com/?apikey=1dfa35e4&s=star wars";

    const handleChange = (e) => {
        //setSearchValue(e.target.value);
        setSearchParam(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
        // axios(apiurl)
        //     .then(results => {
        //         let movieData = results.data.Search;
        //         console.log(movieData);
        //         setFilms(movieData);
        // })

        axios.get((apiUrl2), {
             params: {s: searchParam}
            })
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
        <Provider value={{movies, films, handleChange, searchValue, handleSubmit, searchParam}}>
            {children}
        </Provider>
    )
    
}

export default ContextProvider;