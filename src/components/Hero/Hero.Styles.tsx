import styled from "styled-components";

interface HeroProps {
    primary: string,
    children: React.ReactNode
}

export const StyledHero = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 245, 0.45)), url('https://images.unsplash.com/photo-1601669548151-49cd265c9525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 20vh;
    padding: 1em;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

export const HeroTextBox = styled.div<HeroProps>`
    line-height: 1.2;
    letter-spacing: 1px;
    padding: 3em;
    border-radius: 7px;
    background-color: #6666;
    box-shadow: 0 0 10px #1c1c1c;
`

export const HeroText = styled.h2`
    margin: 0;
    font-size: 1.75rem;
    text-align: center;

    @media screen and (min-width: 550px) {
        font-size: 3rem;
    }
`