import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/home/Home";


const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",

                // headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#ffffff"
                },
                headerBackTitleVisible: false,
                headerTintColor: "black",
                headerShown: false
            }}
        >
            <Stack.Screen
                name="TripSty"
                component={Home}
            // options={{ title: "Profile", headerShown: false }}

            />

            

        </Stack.Navigator>
    )
}

export default HomeStackScreen;