import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f9fbfc" barStyle="dark-content" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
});
