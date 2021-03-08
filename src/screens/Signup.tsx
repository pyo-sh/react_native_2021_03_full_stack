import React from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import SignupStyle from '~/styles/screens/SignupStyle';
import BaseStyle from '~/styles/BaseStyle';

const Signup = () => {
    return <View style={SignupStyle.wrapper}>
        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Email
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="email"
                //value={}
                //onChangeText={}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                NickName
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="nickName"
                //value={}
                //onChangeText={}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Password
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="password"
                //value={}
                //onChangeText={}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Password Check
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="password check"
                //value={}
                //onChangeText={}
                />
        </View>
        
        <TouchableOpacity
            style={[
                SignupStyle.button
            ]}
            //onPress={}
            >
            <Text style={[
                SignupStyle.buttonText
            ]}>
                Create an Account
            </Text>
        </TouchableOpacity>
    </View>
}

export default Signup;