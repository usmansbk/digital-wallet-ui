import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import Service from "./Service";
import Transaction from "./Transaction";

const Header = ({ avatar, name }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Avatar uri={avatar} />
        <View style={styles.text}>
          <Text style={styles.salutation}>Hello</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <IconButton name="search" />
    </View>
  );
};

export default function Home() {
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
      title: "Figma",
      subtitle: "Payment Received",
      amount: "$137",
      color: "#9d56f7",
      icon: "figma",
    },
  ];

  return (
    <View style={styles.container}>
      <Header name={name} avatar={picture} />
      <Service services={services} />
      <Transaction transactions={transactions} />
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
