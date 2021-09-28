import React from "react";
import { ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Card = ({ currency, amount, number, owner, exp, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <View>
      <Text style={[styles.textWhite]}>Current Balance</Text>
      <View style={styles.cash}>
        <Text style={[styles.textWhite, styles.currency]}>{currency}</Text>
        <Text style={[styles.textWhite, styles.amount]}>{amount}</Text>
      </View>
      <View>
        <Text style={[styles.textWhite, styles.number]}>{number}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.textWhite, styles.owner]}>{owner}</Text>
        <View style={styles.exp}>
          <Text style={[styles.textWhite, styles.caption]}>Exp Date</Text>
          <Text style={[styles.textWhite]}>{exp}</Text>
        </View>
      </View>
    </View>
  </View>
);

const CardList = ({ cards = [] }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {cards.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    width: width - 32,
    elevation: 1,
  },
  textWhite: {
    color: "white",
  },
  currency: {
    backgroundColor: "#41b9fb",
    padding: 8,
    borderRadius: 8,
  },
  cash: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  amount: {
    fontSize: 20,
    marginLeft: 8,
  },
  number: {
    fontSize: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  owner: {
    fontSize: 16,
  },
  exp: {
    alignItems: "center",
  },
  caption: {
    fontSize: 12,
  },
});

export default CardList;
