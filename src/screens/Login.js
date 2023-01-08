import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
import * as Animatable from 'react-native-animatable'

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [acessToken, setAcessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:"1030388846497-02rtovk8fa22lpahkb8ek9su06vnpbun.apps.googleusercontent.com",
    iosClientId:"1030388846497-9ttnrunm7a7so42d5rujf7re2boalmjj.apps.googleusercontent.com",
    androidClientId:"1030388846497-kms42a5o5vad4mmtl3j208pf3d12nsj8.apps.googleusercontent.com",
  });

  React.useEffect(() =>{
    if(response?.type === "success"){
      setAcessToken(response.authentication.accessToken);
      acessToken && fetchUserInfo();
    }
  }, [response, acessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers:{ Authorization: 'Bearer ${acessToken}' }
    });
    const useInfo = await response.json();
    setUser(useInfo);
  }

  async function teste() {
    setAcessToken(null);
    setUser(null);
    console.log("Bo")
  }

  const ShowUserInfo = () => {
    if(user) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
          <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
        </View>
      )
    }
  }  

  return (
   
    <View className="flex-1">
      {user && 
      <View>
      <Text>LOGADO</Text>
      <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
      <TouchableOpacity
       onPress={teste}
        
      ><Text>Logout</Text>
      </TouchableOpacity>
      </View>
      }
      {user === null &&
          <>
          <SafeAreaView className="flex-1 py-10 px-10 bg-black ">


            

<Logo></Logo>
<Animatable.View animation="fadeInUp" delay={500} className="my-12">
  
<View className="items-center bottom-5"><Text className="text-cyan-50">Sing in with</Text></View>

<View className="flex-row gap-4 ">
  <TouchableOpacity
    className=" border-1 flex-1 py-2 rounded-md items-center bg-sky-400"
  
  >
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
    className=" bg-neutral-300 border-1 flex-1 py-2 rounded-md items-center"
    
  >
    <Icon name="logo-twitter" size={30} color="#3b5998" />
  </TouchableOpacity>
</View>
</Animatable.View>

</SafeAreaView>

        </>
      }
    </View>
  );
}

