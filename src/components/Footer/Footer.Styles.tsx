import styled from "styled-components";

interface FooterProps {
    bgColor?: string;
    color?: string;
}

export const StyledFooter = styled.footer<FooterProps>`
    padding: 1.5em;
    background-color: ${({bgColor}) => bgColor ? bgColor : 'black'};
    color: ${({color}) => color ? color : 'white'};
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;

    p {
        margin: 0;
    }
`