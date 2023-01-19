import React from "react";
import { Image, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function StaminaIcon() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require("../../assets/stamina-icon.png")}
    />
  );
}
