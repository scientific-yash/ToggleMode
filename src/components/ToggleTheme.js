// ToggleTheme.js
import React, { useState } from 'react';

const ToggleTheme = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </div>
  );
};

export default ToggleTheme;
