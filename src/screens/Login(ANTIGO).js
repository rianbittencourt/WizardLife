import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Logo from "../imgs/Logo";
import * as Animatable from "react-native-animatable";
import { Game } from "./Game";
import { useState, useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [character, setCharacter] = useState({});
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1030388846497-02rtovk8fa22lpahkb8ek9su06vnpbun.apps.googleusercontent.com",
    iosClientId:
      "1030388846497-9ttnrunm7a7so42d5rujf7re2boalmjj.apps.googleusercontent.com",
    androidClientId:
      "1030388846497-kms42a5o5vad4mmtl3j208pf3d12nsj8.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      setAccessToken(response.authentication.idToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const useInfo = await response.json();

    setUser(useInfo);

   
    
  }
  // useEffect(() => {
  //   if (user) {
  //     navigation.navigate('UserCreate', { user });
  //   }
  // }, [user]);


  async function getCharacter() {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      "X-Custom-Data": JSON.stringify({
        provider: "google",
        source: "mobile",
      }),
    };
    try {
      console.log("teste");
      fetch(
        "https://a9b2-2001-818-d952-2600-9cf2-7e6f-9d9e-e9f9.eu.ngrok.io/character",
        {
          method: "GET",
          headers: headers,
        }
      )
        .then(async (response) => {
          console.log(await response.json());
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser() {
    await fetch("https://wizard-life.vercel.app/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Custom-Data": JSON.stringify({
          provider: "google",
          source: "mobile",
        }),
      },
    });
  }

  async function createCharacter() {
    try {
      const response = await fetch(`https://wizard-life.vercel.app/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Custom-Data": JSON.stringify({
            provider: "google",
            source: "mobile",
          }),
        },
      });
      const json = await response.json();

      if (json.status === "Success") {
        const data = json.data;
        if (!data.characterId) {
          const characterData = {
            name: "SmookeHD",
          };

          const result = await fetch(
            "https://wizard-life.vercel.app/character/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                "X-Custom-Data": JSON.stringify({
                  provider: "google",
                  source: "mobile",
                }),
              },
              body: JSON.stringify(characterData),
            }
          );

          const jsonCharacter = await result.json();
          console.log("jsonCharacter", jsonCharacter);
          setCharacter(jsonCharacter);
        }
      } else {
        throw new Error(json.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (

    
    <View className="flex-1 bg-black justify-center">
      <>
        <SafeAreaView className="flex-1 py-10 px-10 bg-black">
          <Logo></Logo>
          <Animatable.View animation="fadeInUp" delay={500} className="my-12">
            <View className="items-center bottom-5">
              <Text className="text-cyan-50">Sing in with</Text>
            </View>

            <View className="flex-row gap-4 ">
              <TouchableOpacity className=" border-1 flex-1 py-2 rounded-md items-center bg-sky-400">
                <Icon name="logo-facebook" size={30} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity
                className=" bg-neutral-300 border-1 flex-1  py-2 rounded-md items-center"
                disabled={!request}
                onPress={() => {
                  promptAsync();
                }}
              >
                <Icon name="logo-google" size={30} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity className=" bg-neutral-400 border-1 flex-1 py-2 rounded-md items-center"
              onPress={console.log("testess", user)}>
                <Icon name="logo-twitter" size={30} color="#55ACEE" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </SafeAreaView>
      </>
    </View>
  );
}
