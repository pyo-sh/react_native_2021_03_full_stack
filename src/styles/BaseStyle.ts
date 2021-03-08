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
    marginRight_8: {
        marginRight: 8
    },
    marginLeft_8: {
        marginLeft: 8
    },
    marginTop_80: {
        marginTop: 80
    },
    flexDirection_Row: {
        flexDirection: 'row'
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