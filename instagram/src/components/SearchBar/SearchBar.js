import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <header>
            <nav>
                <div className="branding">
                    <div className="logo" />
                    <div className="divide" />
                    <div className="brand" />
                </div>
                <input type="text" placeholder="Search" />
                <div className="nav">
                    <div className="compass" />
                    <div className="heart" />
                    <div className="avatar" />
                </div>
            </nav>
        </header>
    )
}

export default SearchBar;