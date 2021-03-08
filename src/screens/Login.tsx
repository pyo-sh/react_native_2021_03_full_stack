import React from 'react';
import { Actions } from 'react-native-router-flux';
// import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginStyle from '~/styles/screens/LoginStyle';
import BaseStyle from '~/styles/BaseStyle';

const Login = () => {
  const onPressSignupButton = () => {
    Actions.signup();
  }

	return <View style={BaseStyle.padding_20}>
    <View style={BaseStyle.marginTop_80}></View>
    <TextInput
      style={LoginStyle.valueInput}
      placeholder="email"
      //value={}
      //onChangeText={}
      />
    <TextInput
      style={LoginStyle.valueInput}
      placeholder="password"
      //value={}
      //onChangeText={}
      />
    <View style={[
      BaseStyle.marginTop_80,
      BaseStyle.flexDirection_Row
    ]}>
      <TouchableOpacity
        style={[
          BaseStyle.button_Base,
          BaseStyle.backgroundColor_Primary,
          BaseStyle.flex_1,
          BaseStyle.marginRight_8
        ]}
        //onPress={}
        >
          <Text style={BaseStyle.color_White}>
            Login
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          BaseStyle.button_Base,
          BaseStyle.backgroundColor_White,
          BaseStyle.flex_1,
          BaseStyle.marginLeft_8
        ]}
        onPress={onPressSignupButton}
        >
          <Text style={BaseStyle.color_Primary}>
            Signup
          </Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default Login;