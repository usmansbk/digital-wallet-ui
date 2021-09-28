import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Home from "./components/Home";
import theme from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
