import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { useStocksContext } from '../contexts/StocksContext';
import { scaleSize } from '../constants/Layout';
import { Ionicons } from '@expo/vector-icons';

import { SearchBar } from 'react-native-elements'; // TODO: npm install this shit

// FixMe: implement other components and functions used in SearchScreen here (don't just put all the JSX in SearchScreen below)

const renderItem = ({ item }) => (
  <View>
    <Text style={styles.stock_symbol}>{data.symbol}</Text>
    <Text style={styles.company_name}>{data.name}</Text>
  </View>
);

function searchStocks(data) {
  return data.symbol.toLowerCase().includes(search) || data.name.toLowerCase().includes(search);
}

export default function SearchScreen({ navigation }) {
  const { ServerURL, addToWatchlist } = useStocksContext();
  const [stocks, setStocks] = useState(null);
  const [filteredStocks, setFilteredStocks] = useState(null);
  const [search, setSearch] = useState("");

  useEffect (() => {
    setFilteredStocks(state.filter(searchStocks));
  }, [search]);

  // can put more code here

  useEffect(() => {
    // FixMe: fetch symbol names from the server and save in local SearchScreen state
	  const api_url = "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=" + "d33091fc27ba64dbf5f2e47bd1ac13ec"
	  fetch(api_url).then((response) => response.json())
    .then((data) => setStocks(data))
    .catch((error) => {
      console.error("Failed to fetch stock market data, error: ", error);
    });
  }, []);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	    <SearchBar
		    placeholder="Search for stock or company name"
  		  onChangeText={(e) => {setSearch(e.target.value.toLowerCase())}}
	    />

      <FlatList style={styles.container}
        data={filteredStocks}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
      />
    </TouchableWithoutFeedback>    
  )
}

// each stock needs to display full company name and stock symbol as well as different buttons depending on whether it has been added to watchlist or not
// use Text components for each of these and a button for
/*
<Text style={styles.stock_symbol}>{data.symbol}</Text>
<Text style={styles.company_name}>{data.name}</Text>


if added

<Button color=
  title="Remove from watchlist"
  onPress={() => removeFromWatchList({data.symbol})}
/>

else

<Button color=
  title="Add to watchlist"
  onPress={() => addToWatchList({data.symbol})}
*/

// FlatList

const styles = StyleSheet.create({
// FixMe: add styles here ...
// use scaleSize(x) to adjust sizes for small/large screens
});