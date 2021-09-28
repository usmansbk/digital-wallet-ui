import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

const Service = ({ services = [] }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Service</Text>
    <View style={styles.services}>
      {services.map(({ id, name, icon, color }) => (
        <TouchableOpacity key={id}>
          <View style={[styles.icon, { backgroundColor: color }]}>
            <Ionicons name={icon} color="white" size={30} />
          </View>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
    color: theme.greyText,
    fontSize: 16,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 60,
    height: 60,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#888",
  },
});

export default Service;
