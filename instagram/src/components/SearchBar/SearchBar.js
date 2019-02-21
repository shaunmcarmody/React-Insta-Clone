import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import avatar from '../../assets/avatar.svg';
import brand from '../../assets/brand.png';
import compass from '../../assets/compass.svg';
import heart from '../../assets/heart.svg';
import logo from '../../assets/logo.png';

const SearchHeader = styled.header`
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0,0,0,.0975);
    align-items: center;
    display: flex;
    height: 77px;
`;

const SearchNav = styled.nav`
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1010px;
    padding: 0 27px;
    width: 100%;
`;

const SearchDiv = styled.div`
    height: 28px;

    ${props => props.flex &&
        css`
            display: flex;
        `};

    border-left: ${props => props.divide ?
        "1px solid black" : null
    };
`;

const Logo = styled(SearchDiv)`
    background: url(${logo}) center center no-repeat;
    background-size: 24px 24px;
    line-height: 24px;
    margin-right: 10px;
    width: 24px;
`;

const Brand  = styled(SearchDiv)`
    background: url(${brand}) center center no-repeat;
    background-size: 103px auto;
    height: 40px;
    margin-left: 10px;
    width: 103px;
`;

const SearchInput = styled.input`
    border: solid 1px #dbdbdb;
    height: 28px;
    min-width: 125px;
    padding: 7px;
    text-align: center;
    width: 215px;
`;

const SearchIcon = styled.div`
    background-size: 20px 20px;
    line-height: 24px;
    width: 20px;

    ${props => props.margin &&
    css`
        margin-right: 20px;
    `};
`;

const Compass = styled(SearchIcon)`
    background: url(${compass}) center center no-repeat;
`;

const Heart = styled(SearchIcon)`
    background: url(${heart}) center center no-repeat;
`;

const Avatar = styled(SearchIcon)`
    background: url(${avatar}) center center no-repeat;   
`;

const SearchBar = props => {
    return (
        <SearchHeader>
            <SearchNav>
                <SearchDiv flex={true} >
                    <Logo />
                    <SearchDiv divide={true} />
                    <Brand />
                </SearchDiv>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    onChange={props.handleChange}
                    value={props.search}
                />
                <SearchDiv flex={true}>
                    {/* <div className="compass" />
                    <div className="heart" />
                    <div className="avatar" /> */}
                    <Compass margin={true} />
                    <Heart margin={true} />
                    <Avatar />
                </SearchDiv>
            </SearchNav>
        </SearchHeader>
    )
}

SearchBar.propTypes = {
    handleChange: PropTypes.func,
    search: PropTypes.string
}

export default SearchBar;