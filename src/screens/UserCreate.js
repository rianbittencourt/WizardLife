import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';







export default function UserCreate() {

    const [nickname, setNickname] = useState('');
    





    return (

        <SafeAreaView className="flex-1 justify-center px-10 bg-neutral-800">
            {/* <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} /> */}
            <View className="flex-1 justify-center items-center">


                <Text className="text-2xl text-sky-200">Como devemos te chamar?</Text>
                <View className="py-10 items-center gap-10">
                    <TextInput className="text-sky-50 text-2xl text-center bg-slate-400 p-2 rounded-xl"
                        value={nickname}
                        onChangeText={text => setNickname(text)}
                        placeholder="Digite seu nickname"
                    />
                    
                    <TouchableOpacity className="bg-neutral-500 rounded-sm px-20 "
                    onPress={() => {
                        console.log(nickname);
                        }} 
                    >
                        <Text className="text-2xl text-sky-200">Criar</Text>
                    </TouchableOpacity>
                </View>
                <View><TouchableOpacity className="bg-neutral-500 rounded-3xl px-3 py-2 "
>
                        <Text className=" text-sky-200">Sair</Text>
                    </TouchableOpacity></View>

            </View>
        </SafeAreaView>

    )

}