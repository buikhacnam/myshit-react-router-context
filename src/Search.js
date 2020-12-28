import React,{useContext} from 'react';
import {AppContext} from './context';
export default function Search() {
    const { handleChange, searchValue, handleSubmit} = useContext(AppContext)
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="search" type='text' value={searchValue} onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}
