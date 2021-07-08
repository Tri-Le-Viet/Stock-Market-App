import React, { useState, useEffect } from 'react';
import { StyleSheet, View} from 'react-native';
import { useStocksContext } from '../contexts/StocksContext';
import { scaleSize } from '../constants/Layout';
//import { Line } from 'react-chartjs-2'; // TODO: npm install

// FixMe: implement other components and functions used in StocksScreen here (don't just put all the JSX in StocksScreen below)

export default function StocksScreen({route}) {
  const { ServerURL, watchList } = useStocksContext();
  const [state, setState] = useState({ /* FixMe: initial state here */ });

  // can put more code here

  useEffect(() => {
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state  
	// For each stock in watchlist
	// let quote_url = https://financialmodelingprep.com/api/v3/quote/ + symbol + "?apikey=" + apikey
	// fetch
  }, [watchList]);

  return (
    <View style={styles.container}>
        <Text>Hello, World!</Text>
    </View>
  );
}

// maybe use a switch to swap between % gain and absolute gain

const styles = StyleSheet.create({
  // FixMe: add styles here ...
  // use scaleSize(x) to adjust sizes for small/large screens
  });