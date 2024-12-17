import React from "react";
import "./scss/styles.css";
import Home from "./components/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${isDarkMode ? "#fff" : "#000"} !important;

    h1,h2,h3,h4,p,span,a, .city__select, .header__input, .other-countries__select {
     color: ${isDarkMode ? "#000" : "#fff"}  !important
    } 
    
  }
  
  .city__location, .city__select {
    background-color: ${isDarkMode ? "#F5F5F5" : "#363636"}  !important
  }
  
  .todays-highlight, .city, .other-countries, .forecast, .list, .header__input, .other-countries__select, .city__select {
      background-color: ${isDarkMode ? "#F5F5F5" : "#1E1E1E"}  !important
    }
   
   .todays-highlight__item, .other-countries__wrapper, .forecast__card-inner-container {
      background-color: ${isDarkMode ? "#ccc" : "#272727"}  !important  
    }
    // invert icons
   .todays-highlight__weather-status-image, .city__location-image, .list__item-image {
    filter: ${isDarkMode ? "invert(1)" : "invert(0)"}
   } 
   .forecast__image {
    filter: "invert(1)"
   }
  `;
  return (
    <ThemeProvider theme={{ isDarkMode }}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
