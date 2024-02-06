import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabScreen from './navigation/BottomTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screen/login/Login';

import { useFonts } from "expo-font";
import { useCallback } from "react";


export default function App() {

  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
    medium: require("./assets/fonts/Inter-Medium.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <FlightSearch/> */}
        {/* <FlightSearchResultCard/> */}
        {/* <FlightReview/> */}
        {/* <BottomTabScreen /> */}
        <Login/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
