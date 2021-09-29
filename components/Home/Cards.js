import React, { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_SIZE = width - 48;

const Card = ({
  currency,
  amount,
  number,
  owner,
  exp,
  color,
  animatedStyle,
}) => (
  <View style={[styles.cardContainer]}>
    <Animated.View
      style={[styles.card, { backgroundColor: color }, animatedStyle]}
    >
      <View style={styles.header}>
        <Text style={[styles.textWhite]}>Current Balance</Text>
        <Image
          resizeMode="contain"
          source={require("../../assets/mastercard.png")}
          style={styles.cardIcon}
        />
      </View>
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
    </Animated.View>
  </View>
);

const CardList = ({ cards = [] }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView
      horizontal
      snapToInterval={CARD_SIZE}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        { useNativeDriver: false }
      )}
    >
      {cards.map(({ id, ...rest }, index) => (
        <Card
          key={id}
          {...rest}
          animatedStyle={{
            transform: [
              {
                scale: scrollX.interpolate({
                  inputRange: [
                    CARD_SIZE * (index - 1),
                    CARD_SIZE * index,
                    CARD_SIZE * (index + 1),
                  ],
                  outputRange: [0.9, 1, 0.9],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: CARD_SIZE,
    elevation: 1,
  },
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardIcon: {
    height: 20,
    width: 30,
  },
});

export default CardList;
