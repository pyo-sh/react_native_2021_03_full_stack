import { StyleSheet } from 'react-native';
import { Color } from '~/Constant';

const SignupStyle = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrapper: {
        width: '80%',
        marginBottom: 20,
    },
    guidelineText:{
        color: Color.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    valueInput:{
        //width: '80%',
        height: 50,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        color:'black',
    },
    button:{
        width: 224,
        height: 59,
        marginTop: 40,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Color.primary,
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default SignupStyle;