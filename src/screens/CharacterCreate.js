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


export function CharacterCreate() {
  const navigation = useNavigation();
  const route = useRoute();
  const accessToken = route.params.accessToken;
  const [nickname, setNickname] = useState("");

  function teste() {
    console.log(accessToken);
    console.log(nickname);
  }

  return (
    <ImageBackground
      className="flex-1 fixed "
      source={require("../../assets/background-img.png")}
    >
      <View className="flex-1 items-center">
        <StatusBar hidden={true} />
        <Logo></Logo>
        <Text className="text-center text-white text-base leading-tight opacity-80">
          You are not yet a wizard
        </Text>
        <View className="flex-1 py-5" width={250}>
          <TextInput
            className="bg-white/30 rounded-md  border-4 border-[#352620]  my-2 p-3 text-center text-white  "
            value={nickname}
            onChangeText={(text) => setNickname(text)}
            placeholder="What is your wizard name?"
          />
          <TouchableOpacity
            className="bg-[#352620] p-3 rounded-md py-4 shadow-lg shadow-black"
            onPress={() => createCharacter(accessToken, nickname, navigation)}
          >
            <Text className="text-center text-white text-base leading-tight opacity-80 ">
              Create Wizard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="my-5" onPress={teste}>
            <Text className="text-center text-white text-base leading-tight opacity-80 ">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
