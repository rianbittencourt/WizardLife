import React, { useState } from "react";
import { View, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import ManaIcon from "../imgs/ManaIcon";

const ManaBar = ({ currentMana, maxMana }) => {
  const progress = currentMana / maxMana;

  return (
    <View
      className="bg-[#261C18] flex-row p-1 items-center justify-center px-3 my"
      borderRadius={50}
    >
      <View className="right-1">
        <ManaIcon></ManaIcon>
      </View>
      <View
        className="bg-[#635050] items-center justify-center flex-row"
        borderRadius={12}
      >
        <ProgressBar
          className=""
          progress={progress}
          width={150}
          height={10}
          color="#02F0FF"
          borderRadius={12}
          borderColor={"transparent"}
        ></ProgressBar>
      </View>
    </View>
  );
};

export default ManaBar;
