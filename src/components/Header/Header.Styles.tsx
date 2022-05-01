import styled from 'styled-components';

interface HeaderProps {
    bgColor?: string;
    children: React.ReactNode;
    color?: string;
}

export const StyledHeader = styled.header<HeaderProps>`
    padding: 2em;
    background-color: ${({bgColor}) => bgColor ? bgColor : 'black'};
    color: ${({color}) => color ? color : 'white'};
`

export const HeaderContainer = styled.div`
    max-width: 1050px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 650px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Logo = styled.h1`
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
    margin: 0;
    text-align: center;
`