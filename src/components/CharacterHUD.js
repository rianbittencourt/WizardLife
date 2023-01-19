import * as React from "react";
import { View } from "react-native";
import { useState } from "react";

import LifeBar from "./LifeBar";
import ManaBar from "./ManaBar";

export function CharacterHUD() {
  return (

        <View className="bg-black ">
      <LifeBar currentLife={40} maxLife={100}></LifeBar>
      <ManaBar currentMana={20} maxMana={100}></ManaBar>
      </View>
   
  );
}
