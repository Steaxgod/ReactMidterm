import { createContext, useState, useEffect } from 'react'

export const themes = {
  light: {
    nav: '#009dd6',
    text: '#112233',
    itembk: '#009dd6',
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    itembk: '#2E2D88',
    nav: '#2E2D88',
    text: '#ffc125',
    foreground: '#fff',
    background: '#242526',
  },
  custom: {
    itembk: '#baffc9',
    nav: '#baffc9',
    text: '#5e3205',
    foreground: '#5e3205',
    background: '#ffffba',
  }
};


// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.custom);

    const toggleTheme = (theme) => {
      setTheme((theme))
    };




    useEffect(() => {
      document.body.style.background = theme.background;
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme  }}>
        {props.children}      
    </ThemeContext.Provider>
  );
};

