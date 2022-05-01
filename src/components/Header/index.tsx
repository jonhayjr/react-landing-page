import {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';
import {StyledHeader, HeaderContainer, Logo} from './Header.Styles'

import Nav from '../Nav/index';

const Header = (): JSX.Element => {
    const {primary, secondary} = useContext(ThemeContext);

    return (
      <StyledHeader bgColor={primary} color={secondary}>
          <HeaderContainer>
              <Logo>Jon Hay</Logo>
              <Nav/>
          </HeaderContainer>
      </StyledHeader>  
    )
}

export default Header;