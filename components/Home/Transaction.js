import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../theme";

const Icon = ({ color, icon }) => (
  <View style={[{ backgroundColor: color }, styles.iconBox]}>
    <View style={styles.icon}>
      <FontAwesome5 name={icon} size={24} color="white" />
    </View>
  </View>
);

const Transaction = ({ transactions = [] }) => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Recent Transaction</Text>
    <View>
      {transactions.map(({ id, title, subtitle, amount, color, icon }) => (
        <TouchableOpacity key={id} style={styles.itemContainer}>
          <View style={styles.itemLeft}>
            <Icon icon={icon} color={color} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          <Text style={{ color }}>{amount}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 24,
    color: theme.greyText,
  },
  itemContainer: {
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#858a91",
    fontSize: 16,
  },
  subtitle: {
    color: "#c7c7c7",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    padding: 4,
    borderRadius: 8,
    marginRight: 12,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 4,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `rgba(0, 0, 0, 0.2)`,
  },
});

export default Transaction;
