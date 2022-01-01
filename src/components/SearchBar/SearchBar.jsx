import './SearchBar.css';
import React from 'react';

const SearchBar = (props) => {
    const { typeOfSearchBar, studentFilterOnChange } = props;
    
    return(
        <div>
            <label htmlFor="search">{typeOfSearchBar}</label>
            <input id={typeOfSearchBar} className='search-input' type="text" placeholder={'Search by ' + typeOfSearchBar} onChange={studentFilterOnChange}/>
        </div>
    );
}

export default SearchBar;