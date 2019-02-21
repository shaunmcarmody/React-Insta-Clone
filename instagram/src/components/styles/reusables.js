import styled, { css } from 'styled-components';

const Username = styled.h1`
    ${props => props.title &&
        css`
            color: #262626;
            font-size: 1.4rem;
            font-weight: bold;
            line-height: 40px;
            margin-left: 12px;
            vertical-align: center;
        `};

    ${props => props.comment &&
        css`
            display: inline;
            font-size: 1.4rem;
            font-weight: 600;
            color: #262626;
        `};
`;

export default Username;