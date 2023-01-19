import React from 'react';
import { Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Logo() {
    return (
      <View className="items-center">
        <Animatable.Image  animation="pulse" easing="ease-out" iterationCount="infinite" source={require('../../assets/logo.png')} style={{ width: 300, height: 300 }}/>
      </View>
    );
  }
