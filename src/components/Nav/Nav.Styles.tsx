import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
    margin-top: 1em;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 650px) {
        flex-direction: row;
        align-items: center;
        margin-top: 0;
    }
`

export const StyledLink = styled(NavLink)`
    color: inherit;
    text-align: center;
    padding: 1em 0;
    font-size: 1.25rem;
    &:last-child {
        padding-bottom: 0;
    }

    text-decoration: ${(props) => {
        return props.state.location === props.to ? 'underline' : 'none';
    }};

    @media screen and (min-width: 650px) {
        padding: 0 1em;


        &:last-child {
        padding-right: 0;
        }
    }
`