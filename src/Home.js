import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import {AppContext} from './context';

export default function Home() {
    const {films} = useContext(AppContext);
    return (
        <div>
            <Search />
           <button><Link to="/poster">POSTER</Link></button>
           <button><Link to="/title">TITLE</Link></button>
           {(films)? films.map(film => {
               return  <div key={film.imdbID}>{film.Title}</div>
           }) : <h3>No result</h3>
            }

        </div>
    )
}
