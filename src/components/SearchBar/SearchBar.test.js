import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const SearchBy = 'Search by ';
const Tag = "tag";

it('renders Student Container Component', () => { 
    render(<SearchBar typeOfSearchBar={Tag}/>);
    const TagSearchBar = screen.getByPlaceholderText(SearchBy + Tag);
    expect(TagSearchBar).toBeInTheDocument();
});