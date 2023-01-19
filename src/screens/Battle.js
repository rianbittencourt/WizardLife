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
import battle from "../services/battle";
import * as Animatable from "react-native-animatable";

export function Battle() {
  const navigation = useNavigation();
  const route = useRoute();
  const accessToken = route.params.accessToken;
  const character = route.params.character;
  const [battleResult, setBattleResult] = useState(null);
  const [battleWinner, setBattleWinner] = useState(null);

  const battleStart = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Custom-Data": JSON.stringify({
          provider: "google",
          source: "mobile",
        }),
      };

      const response = await fetch(
        "https://wizard-life.vercel.app/battle/hunt",
        {
          method: "POST",
          headers: headers,
        }
      );

      const json = await response.json();
      console.log(json);
      setBattleResult(json);
    } catch (error) {
      console.error(error);
    }
  };

  function teste() {
    console.log(
      battleResult.result.result.battleResult.winner == character.result.name
    );
  }

  useEffect(() => {
    if(!battleResult) return;
    setTimeout(() => {
      if (battleResult.result.result.battleResult.winner == character.result.name) {
        console.log("Você Ganhou");
        setBattleWinner(true);
      } else {
        console.log("Você Perdeu");
        setBattleWinner(false);
      }
    }, 2000); // delay of 2 seconds
  }, [battleResult]);

  return (
    <ImageBackground
      className="flex-1 fixed "
      source={require("../../assets/background-img.png")}
    >
      <View className="  bg-[#352620] flex-1 my-10 mx-2 rounded-xl">
        <ResourceBar></ResourceBar>
        <View className="bg-[#514642] flex-1 my-10 mx-5 rounded-xl">
          <View className="block absolute my-5 mx-5">
            <Text className="text-2xl text-[#CEC6C6] font-bold">
              SmookeHD (5)
            </Text>
            <LifeBar
              currentLife={character.result.health}
              maxLife={character.result.totalHealth}
            ></LifeBar>
            <ManaBar currentMana={100} maxMana={100}></ManaBar>
          </View>

          {battleResult === null && (
            <View className=" items-center justify-center content-center top-1/3  ">
              <TouchableOpacity
                className=" py-5 px-20 justify-center rounded-xl bg-[#83726C] "
                onPress={battleStart}
              >
                <Text className="text-2xl text-[#FAFF00] font-extrabold ">
                  BATTLE
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {battleResult && (
            <Animatable.View
              animation="zoomInRight"
              className="block absolute  bottom-0 right-0 my-5 mx-5"
            >
              <TouchableOpacity
                className=" py-5 px-20 justify-center rounded-xl bg-[#83726C] "
                onPress={() => console.log(battleResult.result.result.battleResult.monster.health)}
              ></TouchableOpacity>
              <Text className="text-2xl text-[#CE1D1C] font-bold text-right">
                {battleResult.result.result.battleResult.monster.name}(
                {battleResult.result.result.battleResult.monster.level})
              </Text>
              <LifeBar currentLife={100} maxLife={100}></LifeBar>
              <ManaBar currentMana={100} maxMana={100}></ManaBar>
            </Animatable.View>
          )}


          {battleWinner === true && (
            <View
              
              className="block absolute  bottom-0 right-0 my-5 mx-5"
            >
              <TouchableOpacity
                className=" py-5 px-20 justify-center rounded-xl bg-[#83726C] "
                onPress={() => console.log("teste ", battleResult.result.result.battleResult.monsterHealth)}
              ></TouchableOpacity>
              <Text className="text-2xl text-[#CE1D1C] font-bold text-right">
                {battleResult.result.result.battleResult.monster.name}(
                {battleResult.result.result.battleResult.monster.level})
              </Text>
              <LifeBar currentLife={battleResult.result.result.battleResult.monsterHealth} maxLife={battleResult.result.result.battleResult.monster.health}></LifeBar>
              <ManaBar currentMana={100} maxMana={100}></ManaBar>
            </View>
          )}


        </View>
      </View>
    </ImageBackground>
  );
}
