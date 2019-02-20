import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = props => {
    return (
        <header>
            <nav>
                <div className="branding">
                    <div className="logo" />
                    <div className="divide" />
                    <div className="brand" />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onChange={props.handleChange}
                    value={props.search}
                />
                <div className="nav">
                    <div className="compass" />
                    <div className="heart" />
                    <div className="avatar" />
                </div>
            </nav>
        </header>
    )
}

SearchBar.propTypes = {
    handleChange: PropTypes.func,
    search: PropTypes.string
}

export default SearchBar;