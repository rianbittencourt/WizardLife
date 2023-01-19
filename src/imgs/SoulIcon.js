import React from "react";
import { Image, View } from "react-native";


export default function SoulIcon() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require("../../assets/soul-icon.png")}
    />
  );
}
