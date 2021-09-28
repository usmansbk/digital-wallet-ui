import React from "react";
import { View, Text } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import Service from "./Service";
import styles from "./styles";

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
  return (
    <View style={styles.container}>
      <Header name={name} avatar={picture} />
      <Service services={services} />
    </View>
  );
}
