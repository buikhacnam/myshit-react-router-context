import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
           <button><Link to="/poster">POSTER</Link></button>
           <button><Link to="/title">TITLE</Link></button>
        </div>
    )
}
