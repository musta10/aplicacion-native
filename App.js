import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: "#F71414",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Red Tomato"
        }} />
        <Stack.Screen name="Details" component={DetailsScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


