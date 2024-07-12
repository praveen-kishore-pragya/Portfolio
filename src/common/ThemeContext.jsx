import {createContext, useContext, useState, useEffect} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) =>{
  
  const [theme, setTheme] = useState(()=>
    localStorage.getItem('theme') || 'light');


  useEffect(()=>{
    // Sets a data-theme attribute on the <body> element (useful for CSS styling)
    document.body.setAttribute('data-theme', theme);
    
    //Saves the current theme to localStorage 
    localStorage.setItem('theme', theme); 
    
  },[theme]);

  
  const toggleTheme = ()=>{
    setTheme((prevTheme)=>
      (prevTheme === 'light' ? 'dark' : 'light')
    );
  }

  // makes the theme and toggleTheme function available to all child components
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )

}