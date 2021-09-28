import React from "react";
import { View, Text } from "react-native";
import Avatar from "../common/Avatar";
import IconButton from "../common/IconButton";
import styles from "./styles";

const Header = () => {
  const name = "One Achmad";
  const picture = "https://i.pravatar.cc/300";

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Avatar uri={picture} />
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
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
