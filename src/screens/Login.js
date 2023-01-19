import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Logo from "../imgs/Logo";
import * as Animatable from "react-native-animatable";
import { useState, useEffect } from "react";
import verifyUser from "../services/verifyUser";
import verifyCharacter from "../services/verifyCharacter";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const navigation = useNavigation();
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
    console.log(user);
    verifyUser(accessToken);
    verifyCharacter(accessToken, navigation);
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
              <TouchableOpacity
                className=" bg-neutral-400 border-1 flex-1 py-2 rounded-md items-center"
                onPress={console.log(accessToken)}
              >
                <Icon name="logo-twitter" size={30} color="#55ACEE" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </SafeAreaView>
      </>
    </View>
  );
}
