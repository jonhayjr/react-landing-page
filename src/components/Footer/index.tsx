import {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';

import {StyledFooter} from './Footer.Styles';

const Footer = (): JSX.Element => {
    const {primary, secondary} = useContext(ThemeContext);

    return (
        <StyledFooter bgColor={primary} color={secondary}>
            <p>&copy;2022 Jon Hay</p>
        </StyledFooter>
    )
}

export default Footer;