import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../theme";

const Transaction = ({ transactions = [] }) => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>Recent Transaction</Text>
    <View>
      {transactions.map(({ id, title, subtitle, amount }) => (
        <TouchableOpacity key={id} style={styles.itemContainer}>
          <View>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          <Text>{amount}</Text>
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
});

export default Transaction;
