import React from "react";
import {
    View,
    TouchableWithoutFeedback,
    Platform,
    UIManager,
    LayoutAnimation,
} from 'react-native';

import ToggleStyle from '~/styles/components/library/ToggleStyle';

const Toggle = (props: any) => {
    const onPress = () => {
        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        props.onToggle(!props.isActive);
    }
    return <TouchableWithoutFeedback onPress={onPress}>
        <View style={[
            ToggleStyle.viewToggle, 
            !props.isActive ? ToggleStyle.activated : ToggleStyle.deactivated
            ]}>
            <View style={ToggleStyle.circleToggle}></View>
        </View>
    </TouchableWithoutFeedback>
}

export default Toggle;