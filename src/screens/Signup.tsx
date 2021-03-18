import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import SignupStyle from '~/styles/screens/SignupStyle';
import BaseStyle from '~/styles/BaseStyle';

import DropDownInput from '~/components/library/DropDownInput';
import { emailRule, langList } from '~/Common';
import { Actions } from 'react-native-router-flux';

interface InputType {
    email: string,
    nickName: string,
    password:  string,
    passwordCheck:  string,
    lang:  string,
}

const Signup = () => {
    const [inputValue, setInputValue] = useState<InputType>({
        email:"",
        nickName:"",
        password: "",
        passwordCheck: "",
        lang: "",
    });

    const onChangeValue = (key: string) => (event: string) => {
        setInputValue((prevState) => {
            return {
                ...prevState,
                [key]: event.toLowerCase(),
            }
        });
    }

    const validateInput = () => {
        if(inputValue.email) {
            if(!emailRule.test(inputValue.email)) {
                return {
                    success: false,
                    message: "이메일형식이 올바르지 않습니다."
                }
            }
        }
        else {
            return {
                success: false,
                message: "이메일을 입력해주세요."
            }
        }
        
        if (inputValue.password !== inputValue.passwordCheck) {
            return {
                success: false,
                message: "check your password",
            }
        }
        
        return {
            success: true,
            message: "good to go"
        }
    }

    const createAccount = () => {
        const result = validateInput();
        if(!result.success){
            Alert.alert(result.message);
            return
        }

        const payload = {
            email: inputValue.email,
            password: inputValue.password,
            nick_name: inputValue.nickName,
        }

        // APIS~

        Actions.daily();
    }
    
    return <View style={SignupStyle.wrapper}>
        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Email
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="email"
                value={inputValue.email}
                onChangeText={onChangeValue("email")}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                NickName
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="nickName"
                value={inputValue.nickName}
                onChangeText={onChangeValue("nickName")}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Password
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="password"
                value={inputValue.password}
                onChangeText={onChangeValue("password")}
                />
        </View>

        <View style={SignupStyle.inputWrapper}>
            <Text style={SignupStyle.guidelineText}>
                Password Check
            </Text>
            <TextInput
                style={SignupStyle.valueInput}
                placeholder="password check"
                value={inputValue.passwordCheck}
                onChangeText={onChangeValue("passwordCheck")}
                />
        </View>

        <DropDownInput
            label="Language"
            renderKey="lang"
            list={langList}
            txtInit="choose your lang"
            valueInit={inputValue.lang}
            onSelectClick={onChangeValue}
            />
        
        <TouchableOpacity
            style={[
                SignupStyle.button
            ]}
            onPress={createAccount}
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