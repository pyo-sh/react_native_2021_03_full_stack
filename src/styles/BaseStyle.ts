import { StyleSheet } from 'react-native';
import { Color } from '~/Constant';

const BaseStyle = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    position_Relative:{
        position: 'relative'
    },
    padding_20: {
        padding: 20
    },
    paddingLeft_20: {
        paddingLeft: 20
    },
    paddingRight_20: {
        paddingRight: 20
    },
    marginRight_8: {
        marginRight: 8
    },
    marginLeft_8: {
        marginLeft: 8
    },
    marginTop_32: {
        marginTop: 32
    },
    marginTop_50: {
        marginTop: 50
    },
    marginTop_80: {
        marginTop: 80
    },
    marginBottom_16: {
		marginBottom:16,
	},
    flexDirection_Row: {
        flexDirection: 'row'
    },
    fontSize_12: {
        fontSize: 12
    },
    fontSize_14: {
        fontSize:14
    },
    fontWeight_bold: {
        fontWeight: 'bold'
    },
    color_Primary: {
        color: Color.primary
    },
    color_White: {
        color: Color.white
    },
    color_DarkGray: {
        color: Color.dark_gray
    },
    color_Black: {
		color: Color.black
	},
    backgroundColor_Primary: {
        backgroundColor: Color.primary
    },
    backgroundColor_White: {
        backgroundColor: Color.white
    },

    button_Base: {
        height:56,
        justifyContent:'center',
		alignItems:'center',

        borderRadius:8,
		fontSize:14,
    },
});

export default BaseStyle;