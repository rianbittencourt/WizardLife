import * as React from "react";
import { View, Text } from "react-native";
import ExpIcon from "../imgs/ExpIcon";
import GoldIcon from "../imgs/GoldIcon";
import SoulIcon from "../imgs/SoulIcon";
import StaminaIcon from "../imgs/StaminaIcon";

export function ResourceBar(props) {
   
  return (
    <View className="flex-row justify-center px-10 my-5 ">
      <View
        className="bg-[#29B23F]/50 flex-row w-1/4  items-center justify-center p-1"
        style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 30 }}
      >
        <StaminaIcon></StaminaIcon>
        <Text className="text-white font-bold text-l  ">
          {100}/100
        </Text>
      </View>
      <View className="bg-[#00FFD1]/50 border-1 flex-row w-1/4  items-center px-1  ">
        <ExpIcon></ExpIcon>
        <Text className="text-white font-bold text-l ">135</Text>
      </View>
      <View
        className="bg-[#FFC700]/50 border-1 flex-row w-1/4   items-center px-1  "
        
      >
        <GoldIcon></GoldIcon>
        <Text className="text-white font-bold text-l">{0}</Text>
      </View>
      <View
        className="bg-[#9522CB]/50 border-1 flex-row w-1/4   items-center px-1  "
        style={{ borderBottomRightRadius: 10, borderTopRightRadius: 30 }}
      >
        <SoulIcon></SoulIcon>
        <Text className="text-white font-bold text-l">{0}</Text>
      </View>
    </View>
  );

  // props.character.result.gold
}
