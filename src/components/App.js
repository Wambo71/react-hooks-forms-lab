// src/App.js
import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header
        onDarkModeClick={handleDarkModeClick}
        isDarkMode={isDarkMode}
      />
      <ShoppingList />
    </div>
  );
}

export default App;
