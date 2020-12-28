import React, {useContext} from 'react'
import {AppContext} from './context';
import {Link} from 'react-router-dom';
export default function Title() {
    const movies = useContext(AppContext)
    return (
        <div>
            <button><Link to="/">HOME</Link></button>
            <button><Link to="/poster">POSTER</Link></button>
            <button><Link to="/title">TITLE</Link></button>
            {
              movies.map(movie => {
                return <div key={movies.imdbID}>{movie.Title}</div>
              })
            }
        </div>
    )
}