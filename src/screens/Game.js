import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { ResourceBar } from "../components/ResourcesBar";
import LifeBar from "../components/LifeBar";
import ManaBar from "../components/ManaBar";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import ExpBar from "../components/ExpBar";
import SettingsIcon from "../imgs/SettingsIcon";
StatusBar.setHidden(true, "none");

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const accessToken = route.params.accessToken;
  const character = route.params.character;
  const name = character.name;

  // const [currentLife, setCurrentLife] = useState({});

  //   async function getCharacter() {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //       "X-Custom-Data": JSON.stringify({
  //         provider: "google",
  //         source: "mobile",
  //       }),
  //     };
  //     try {
  //       console.log("teste");
  //       fetch("https://wizard-life.vercel.app/character", {
  //         method: "GET",
  //         headers: headers,
  //       })
  //         .then(async (response) => {
  //           const jsonCharacter = await response.json();
  //           console.log("jsonCharacter", jsonCharacter);
  //           setCharacter(jsonCharacter);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   useEffect(() => {
  //     getCharacter()
  //  }, [])

  function teste() {
    console.log(character);
    console.log(accessToken);
  }

  function naveToBattle() {
    navigation.navigate("Battle", { accessToken, character });
  }

  return (
    <ImageBackground
      className="flex-1 fixed "
      source={require("../../assets/background-img.png")}
    >
      <View className="items-center my-10 ">
        <TouchableOpacity className="absolute right-0 mx-2">
          <SettingsIcon></SettingsIcon>
        </TouchableOpacity>

        <View
          className="bg-[#352620] py-2 px-5  shadow-xl shadow-black  "
          borderRadius={12}
        >
          <Text className="text-3xl text-[#CEC6C6] font-black ">
            {character && <Text>{character.result.name}</Text>}
          </Text>
          <Text className="text-3xl text-[#EBFF00] font-black text-center">
            {character.result.level}
          </Text>
        </View>

        <LifeBar
          currentLife={character.result.health}
          maxLife={character.result.totalHealth}
        ></LifeBar>
        <ManaBar
          currentMana={character.result.mana}
          maxMana={character.result.totalMana}
        ></ManaBar>
        <ExpBar
          currentExp={character.result.experience}
          maxExp={character.result.expNextLevel}
        ></ExpBar>

        <ResourceBar character={character}> </ResourceBar>
      </View>
      <View className=" px-10   ">
        <TouchableOpacity
          className="bg-red-700/50 py-7 text-center rounded-xl shadow-lg shadow-black  "
          onPress={naveToBattle}
          style={{
            borderWidth: 3,
            borderColor: "#724242",
            shadowColor: "rgba(0, 0, 0, 0.25)",
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
          }}
        >
          <Text
            className="text-center text-3xl text-[#FAFF00] font-extrabold   "
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.5)",
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 4,
            }}
          >
            FIGHT
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View className="flex-row  px-12 gap-2 my-5 self-center align-center    ">
        <TouchableOpacity className="bg-red-800   rounded-xl flex-row w-1/2 py-8 items-center justify-center   ">
          <Text className=" text-2xl text-[#FAFF00] ">FIGHT</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-800   rounded-xl flex-row w-1/2 py-8 items-center justify-center   ">
          <Text className="text-2xl text-[#FAFF00]  ">FIGHT</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row  px-12 gap-2 self-center align-center    ">
        <TouchableOpacity className="bg-red-800   rounded-xl flex-row w-1/2 py-8 items-center justify-center   ">
          <Text className=" text-2xl text-[#FAFF00] ">FIGHT</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-800   rounded-xl flex-row w-1/2 py-8 items-center justify-center   ">
          <Text className="text-2xl text-[#FAFF00]  ">FIGHT</Text>
        </TouchableOpacity>
      </View> */}
    </ImageBackground>
  );
}
