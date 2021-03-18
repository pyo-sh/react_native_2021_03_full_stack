import { StyleSheet } from 'react-native';
import { Color } from '~/Constant';

const DailyStyle = StyleSheet.create({
    daily_Title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "Cochin",
        color: 'white',
    },
    daily_Subtitle: {
        fontSize: 18,
        fontFamily: "Cochin",
        color: 'white',
    },

    daily_Items: {
        marginTop: 40,
        paddingBottom: 40,
        paddingTop: 40,
        borderRadius: 20, 
        backgroundColor: 'white',
    },
    daily_Item_Date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#8fa5db"
    },
    daily_Item_Title: {
        marginTop: 16,
        fontSize: 24,
        fontWeight: 'bold',
    },
    daily_Item_Content: {
        marginTop: 8,
        fontSize: 20,
        fontFamily: "Cochin"
    },
    daily_Item_Bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    daily_Item_Empty: {
        marginTop: 32,
        marginBottom: 32,
        borderTopWidth: 1,
        borderColor: '#e6eaf3',
    },

    daily_Bottom_Toggle_Text: {
        color: "#777d92",
        marginLeft: 16,
    },
    daily_Bottom_Button: {
        height: 56,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
		alignItems: 'center',
		fontSize: 14,
		borderRadius: 8,
		color: Color.white,
        backgroundColor: Color.primary,
    },
    daily_Bottom_Button_Text: {
        fontSize: 20,
        color: 'white',
    },

    other_Item_Title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    other_Item_Content: {
        fontSize:16,
        color:"#eef2ff",
    },
});

export default DailyStyle;