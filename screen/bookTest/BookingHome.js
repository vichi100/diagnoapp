// BookingHome.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  View
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import List from './List'
import SearchBar from './SearchBar';

const BookingHome = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
      {/* {<Text style={styles.title}>Programming Languages</Text>} */}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
     
     {/* backgroundColor: '#B6E2A1' */}
        <View style={{
          flexDirection: 'row', alignItems: 'center', backgroundColor: '#B0E0A8', margin:15, justifyContent:'space-between',
          borderTopStartRadius: 20, borderBottomStartRadius: 20, borderBottomEndRadius: 25, borderTopEndRadius: 25
        }}>
          <Text style={{ padding: 22, fontSize:hp('2%') , fontWeight:600}}>Not Sure, Call Us</Text>
          <View style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 6,
            borderColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6FC7E1',


          }}>
            <MaterialIcons name="call" color={"#000000"} size={hp('3%')} />
          </View>
        </View>
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (

        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />

      )}
    </SafeAreaView>
  );
};

export default BookingHome;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",

  },
});