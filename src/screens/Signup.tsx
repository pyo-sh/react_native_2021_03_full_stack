import React, { useState } from 'react';
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

import DropDownInput from '~/components/library/DropDownInput';
import { langList } from '~/Common';

interface inputType {
    email: string,
    nickName: string,
    pw:  string,
    pwCheck:  string,
    lang:  string,
}

const Signup = () => {
    const [inputValue, setInputValue] = useState<inputType>({
        email:"",
        nickName:"",
        pw: "",
        pwCheck: "",
        lang: "",
    });
    
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

        <DropDownInput
            label="Language"
            renderKey="lang"
            list={langList}
            txtInit="choose your lang"
            valueInit={inputValue.lang}
            //onSelectClick={onChange}
            />
        
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