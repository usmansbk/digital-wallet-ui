import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import CardList from "./Cards";
import Service from "./Service";
import Transaction from "./Transaction";

const Header = ({ avatar, name, salutation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Avatar uri={avatar} />
        <View style={styles.text}>
          <Text style={styles.salutation}>{salutation}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <IconButton name="search" />
    </View>
  );
};

export default function Home() {
  const salutation = "Hello";
  const name = "One Achmad";
  const picture = "https://i.pravatar.cc/300";
  const services = [
    {
      id: "wallet",
      name: "Wallet",
      icon: "wallet",
      color: "#ef5160",
    },
    {
      id: "transfer",
      name: "Transfer",
      icon: "cash",
      color: "#85d0f9",
    },
    {
      id: "pay",
      name: "Pay",
      icon: "card",
      color: "#fbb244",
    },
    {
      id: "topup",
      name: "Topup",
      icon: "phone-portrait",
      color: "#50b350",
    },
  ];
  const transactions = [
    {
      id: "dribbble",
      title: "Dribbble",
      subtitle: "Payment Received",
      amount: "$245",
      color: "#fd5c94",
      icon: "dribbble",
    },
    {
      id: "google-wallet",
      title: "Google Wallet",
      subtitle: "Payment via wallet can be done",
      amount: "$180",
      color: "#64af25",
      icon: "google-wallet",
    },
    {
      id: "figma",
      title: "Uplabs",
      subtitle: "Payment Received",
      amount: "$137",
      color: "#93a7e7",
      img: require("../../assets/uplabs.jpg"),
    },
  ];
  const cards = [
    {
      id: "card-1",
      type: "master-card",
      currency: "USD",
      amount: 248.75,
      owner: "One Achmad",
      exp: "10/28",
      number: "****  ****  ****  1234",
      color: "#fbb245",
    },
    {
      id: "card-2",
      type: "master-card",
      currency: "USD",
      amount: 248.75,
      owner: "One Achmad",
      exp: "10/28",
      number: "****  ****  ****  1234",
      color: "#4965fb",
    },
    {
      id: "card-3",
      type: "visa",
      currency: "USD",
      amount: 248.75,
      owner: "One Achmad",
      exp: "10/28",
      number: "****  ****  ****  1234",
      color: "#40b7fb",
    },
  ];

  return (
    <View style={styles.container}>
      <Header salutation={salutation} name={name} avatar={picture} />
      <ScrollView>
        <CardList cards={cards} />
        <Service services={services} />
        <Transaction transactions={transactions} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  headerLeft: {
    flexDirection: "row",
  },
  salutation: {
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    marginLeft: 8,
    justifyContent: "space-between",
  },
});
