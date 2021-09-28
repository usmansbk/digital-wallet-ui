import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

const IconButton = ({
  name,
  size = 24,
  color = theme.icon,
  onPress = () => null,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.iconButton}>
    <Ionicons name={name} size={size} color={color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 4,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
