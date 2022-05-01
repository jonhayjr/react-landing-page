import {createContext} from 'react';

interface IThemeContext {
    primary: string;
    secondary: string;
  }

interface Props {
    children: React.ReactNode;
}

const darkTheme = {
    primary: '#000',
    secondary: '#fff'
}

const ThemeContext = createContext<IThemeContext>(darkTheme);

const ThemeProvider = ({children}:Props) => {

    return (
        <ThemeContext.Provider value={{primary: '#1c1c1c', secondary: '#fff'}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};