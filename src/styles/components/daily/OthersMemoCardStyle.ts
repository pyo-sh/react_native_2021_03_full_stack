import { StyleSheet } from 'react-native';
import { Color } from '~/Constant';

const OthersMemoCardStyle = StyleSheet.create({
    wrapper: {
        width:300,
        height:150,
        marginRight:8,
        padding:20,

        position:"relative",
        borderRadius:12,
        backgroundColor: Color.white,
    },

    content: {
        fontSize:16,
        fontFamily:"Cochin",
    },

    nickname: {
        color:"#767676",
        fontFamily:"Cochin"
    },
    nickname_wrapper: {
        position:"absolute", 
        bottom:10,
        right:20,
    },

    likes: {
        color:'#777d92',
        marginLeft:10,
    },
    likes_button: {
        position:"absolute",
        bottom:10,
        left:20,
    },

    image: {
        width:20,
        height:20,  
    },
});

export default OthersMemoCardStyle