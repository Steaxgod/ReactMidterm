import { createContext, useState, useEffect } from 'react'

export const themes = {
  light: {
    nav: '#009dd6',
    text: '#112233',
    itembk: '#92dfff',
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    itembk: '#1034a6',
    nav: '#2E2D88',
    text: '#ffc125',
    foreground: '#fff',
    background: '#242526',
  },
};


// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
      setTheme((previousValue) =>
        previousValue === themes.light ? themes.dark : themes.light
      );
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

