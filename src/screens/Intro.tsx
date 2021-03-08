import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// webpack.Configuration 안에
// module: rules: [... { 안에 png 파일을 넣어야 하는듯? }]

// declare module '*.png';
// import * as mainImage from 'resource/intro.png';

import IntroStyle from '~/styles/screens/IntroStyle';
import BaseStyle from '~/styles/BaseStyle';

const Intro = () => {
  const onPressLoginButton = () => {
    Actions.login();
  }

  return <View style={BaseStyle.position_Relative}>
    <Image source={require('~/resource/intro.png')}/>
    <View style={IntroStyle.mainTitle}>
      <Text style={IntroStyle.mainText}>
        One Thought A Day
      </Text>
      <Text style={IntroStyle.mainSubText}>
        share your everyday thoughts
        {"\n"}
        and see what others are thinking!
      </Text>
    </View>
    <View style={IntroStyle.mainBottom}>
      <TouchableOpacity
        onPress={onPressLoginButton}
        style={IntroStyle.LoginButton}
        >
        <Text style={IntroStyle.bottomText}>
          Let's start
        </Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default Intro;