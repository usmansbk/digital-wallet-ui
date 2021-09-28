import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import styles from "./styles";

const Service = ({ services = [] }) => (
  <View style={styles.serviceContainer}>
    <Text style={styles.serviceTitle}>Service</Text>
    <View style={styles.services}>
      {services.map(({ id, name, icon, color }) => (
        <TouchableOpacity key={id} style={styles.serviceItem}>
          <View style={[styles.serviceIcon, { backgroundColor: color }]}>
            <Ionicons name={icon} color="white" size={40} />
          </View>
          <Text style={styles.serviceName}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

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
