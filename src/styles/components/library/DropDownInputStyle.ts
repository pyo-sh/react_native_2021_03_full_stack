import { StyleSheet } from 'react-native';

const DropDownInputStyle = StyleSheet.create({
    item_Select: {
        width: '100%',
        minHeight: 50,
        padding: 16,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: "#e0e3e9",
    },

    click_button: {
        height: 50,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },

    items: {
        borderWidth: 1,
        borderColor: '#e0e3e9',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
});

export default DropDownInputStyle