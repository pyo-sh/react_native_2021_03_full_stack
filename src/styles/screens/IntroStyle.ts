import { StyleSheet } from 'react-native';

const IntroStyle = StyleSheet.create({
    posRel : {
        position: 'relative',
    },

    mainTitle:{
        top: 150,
        left: 0,
        right: 0,

        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText:{
        fontSize: 30,
        color:'white',
        fontWeight:'bold',
    },
    mainText2:{
        marginTop: 16,
    },

    mainBottom:{
        bottom: 130,
        left: 0,
        right: 0,

        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LoginButton:{
        width: 224,
        height: 59,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        borderRadius: 30,
    },
    bottomText:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default IntroStyle;