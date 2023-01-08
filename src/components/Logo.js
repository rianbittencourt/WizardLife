import React from 'react';
import { Image, View } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Logo() {
    return (
      <View className="items-center right-4">
        <Animatable.Image animation="flipInY" source={require('../../assets/logo.gif')}/>
      </View>
    );
  }
