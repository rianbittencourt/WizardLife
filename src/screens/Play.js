import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import Logo from "../imgs/Logo";
import { useRoute } from "@react-navigation/native";
import createCharacter from "../services/createCharacter";
import { useNavigation } from "@react-navigation/native";

export function Play() {
  const navigation = useNavigation();
  const route = useRoute();
  const accessToken = route.params.accessToken;
  const characterjson = route.params.characterjson;
  const character = characterjson;


  function play(){
    navigation.navigate("Game", { accessToken, character });
  }

  function teste() {
    console.log(character);
    console.log(accessToken);
    console.log("Usuario deslogado");
    // navigation.navigate("Login", { accessToken });
  }

  return (
    <ImageBackground
      className="flex-1 fixed "
      source={require("../../assets/background-img.png")}
    >
      <View className="flex-1 items-center">
        <StatusBar hidden={true} />
        <Logo></Logo>
        <Text className="text-center text-white text-base leading-tight opacity-80">{character.name}</Text>
        <View className="flex-1 py-5" width={250}>
          <TouchableOpacity
            className="bg-[#352620] p-3 rounded-md py-4 shadow-lg shadow-black"
            onPress={play}
          >
            <Text className="text-center text-white text-base leading-tight opacity-80 ">
              PLAY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="my-5"
           onPress={teste}>
            <Text className="text-center text-white text-base leading-tight opacity-80 ">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
