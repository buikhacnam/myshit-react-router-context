import React,{useContext} from 'react';
import {AppContext} from './context';
export default function Search() {
    const { handleChange, searchParam, handleSubmit} = useContext(AppContext)
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="search" type='text' value={searchParam} onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}
