import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();



const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Looking for a job..?",
        image: "./images/hero.gif",
      },
    });
  };

  const udpateAboutPage = () => {
    return 
  };




  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
