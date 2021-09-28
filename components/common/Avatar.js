import React from "react";
import { Image } from "react-native";

const Avatar = ({ uri, size = 48 }) => (
  <Image
    source={{ uri }}
    resizeMode="cover"
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
    }}
  />
);

export default Avatar;
