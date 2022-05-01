import {useLocation} from 'react-router-dom';
import {StyledLink, StyledNav} from './Nav.Styles';

const Nav = () => {
    const location = useLocation(); 

    return (
        <StyledNav>
            <StyledLink to='/' state={{location: location.pathname }}>Home</StyledLink>
            <StyledLink to='/about' state={{location: location.pathname }}>About</StyledLink>
            <StyledLink to='/projects' state={{location: location.pathname }}>Projects</StyledLink>
            <StyledLink to='/contact' state={{location: location.pathname }}>Contact</StyledLink>
        </StyledNav>
    )
}

export default Nav;