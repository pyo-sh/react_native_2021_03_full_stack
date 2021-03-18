import React, { useState } from 'react';
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

type LoginType = {
  email: string,
  password: string,
}

const Login = () => {
  const [inputValue, setInputValue] = useState<LoginType>({
    email: "",
    password: "",
  });

  const onChangeValue = (key: string) => (value: string) => {
    setInputValue({
      ...inputValue,
      [key]: value.toLowerCase(),
    });
  }

  const onPressLoginButton = () => {
    Actions.daily();
  }

	return <View style={BaseStyle.padding_20}>
    <View style={BaseStyle.marginTop_80}></View>
    <TextInput
      style={LoginStyle.valueInput}
      placeholder="email"
      value={inputValue.email}
      onChangeText={onChangeValue("email")}
      />
    <TextInput
      style={LoginStyle.valueInput}
      placeholder="password"
      value={inputValue.password}
      onChangeText={onChangeValue("password")}
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
        onPress={onPressLoginButton}
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
        onPress={() => Actions.signup()}
        >
          <Text style={BaseStyle.color_Primary}>
            Signup
          </Text>
      </TouchableOpacity>
    </View>
  </View>
}

export default Login;