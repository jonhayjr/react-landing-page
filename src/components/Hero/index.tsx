import {useContext} from 'react';
import { ThemeContext } from '../../context/themeContext';
import { StyledHero, HeroTextBox, HeroText } from "./Hero.Styles";

const Hero = () => {

    const {primary} = useContext(ThemeContext);

    return (
        <StyledHero>
          <HeroTextBox primary={primary}>
            <HeroText>My name is Jon</HeroText>
          </HeroTextBox>
        </StyledHero>
    )
}

export default Hero;