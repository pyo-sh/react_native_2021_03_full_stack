import { StyleSheet } from 'react-native';
import { Color } from '~/Constant';

const ToggleStyle = StyleSheet.create({
    viewToggle: {
        height: 22,
        width: 45,
        borderRadius: 20,
        justifyContent: 'center'
    },
    circleToggle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff'
    },

    activated: {
        backgroundColor: '#000'
    },
    deactivated: {
        backgroundColor: Color.primary,
        alignItems: 'flex-end',
    }
});

export default ToggleStyle