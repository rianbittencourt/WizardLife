import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import { CharacterCreate } from "./src/screens/CharacterCreate";
import { Game } from "./src/screens/Game";
import { Play } from "./src/screens/Play";
import verifyCharacter from "./src/services/verifyCharacter";
import { Battle } from "./src/screens/Battle";


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CharacterCreate" component={CharacterCreate} />
      <Stack.Screen name="Play" component={Play} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Battle" component={Battle} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
   
     <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
