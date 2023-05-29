import { FaMoon, FaSun, FaPencilAlt } from 'react-icons/fa';
import { ThemeContext, themes } from '../ThemeContext';
import { useContext } from 'react';
import '../Button.css'
import '../App.css'


const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = (selectedTheme) => {
    toggleTheme(selectedTheme);
  };

  return (
    <>
      <div className='holder'>
        <button className="switch" onClick={() => handleToggleTheme(themes.dark)}>
          <FaMoon className="theme-icon black-theme-icon" />
        </button>

        <button className="switch" onClick={() => handleToggleTheme(themes.light)}>
          <FaSun className="theme-icon white-theme-icon" />
        </button>

        <button className="switch" onClick={() => handleToggleTheme(themes.custom)}>
          <FaPencilAlt className="theme-icon custom-theme-icon" />
        </button>
      </div>
    </>
  );
};

export default ToggleSwitch;
