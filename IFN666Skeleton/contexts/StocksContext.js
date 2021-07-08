import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const StocksContext = React.createContext();

export const StocksProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <StocksContext.Provider value={[state, setState]}>
      {children}
    </StocksContext.Provider>
  );
};

export const useStocksContext = () => {
  const [state, setState] = useContext(StocksContext);

  // can put more code here

  function saveToStorage() {
    // expo install @react-native-async-storage/async-storage
    //AsyncStorage.setItem("watchlist", watchList.toString());
    /*
    try {
      await AsyncStorage.setItem("watchlist", watchList.toString());
      var d = new Date()
      await AsyncStorage.setItem("time", d.toString());
    } catch (e) {
      // do something
    }
    */
    //TODO: save to SQL database
  }

  function addToWatchlist(symbol) {
    state.push(symbol);
    saveToStorage()
  }
  
  function removeFromWatchlist(symbol) {
	  
    let index = state.indexOf(symbol);
    if (index == -1) {
      console.error("Error, symbol " + symbol + " not in watchlist");
    } else {
      state.splice(index, 1);
    }

    saveToStorage()
  }

  useEffect(() => {
    // FixMe: Retrieve watchlist from persistent storage
    /*
    try {
      const watch = await AsyncStorage.getItem("watchlist");
      if (watch !== null) {
        setState(watch.split(","));
        const time = awaitAsyncStorage.getItem("time"); // Only need to check this if we there is a valid entry
        // TODO check if this version is older than the SQL database
      }
    } catch(e) {
      // do something
    }
    */

    
  }, []);

  return { ServerURL: 'http://131.181.190.87:3001', watchList: state,  addToWatchlist, removeFromWatchlist };
};
