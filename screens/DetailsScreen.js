import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="pasar las pantallas siguiente..."
          onPress={() => navigation.push("Details")}
        />
          <Button
          title="volver al Home"
          onPress={() => navigation.navigate("Home")}
        />
          <Button
          title="volver atras"
          onPress={() => navigation.goBack()}
        />
          <Button
          title="la primera pantalla"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  export default DetailsScreen;