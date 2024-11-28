import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    item: {
        fontSize: fontSizes.FONT22,
        marginHorizontal: windowWidth(20),
        fontFamily: 'mulishSemiBold',
        color: appColors.primary,
        marginTop: windowHeight(15)
    },
    listView: {
        marginLeft: windowWidth(20),
        alignItems: 'center',
        marginTop: windowHeight(20),
        
        flexDirection: 'row'
    },
    quantityTxt: {
        fontSize: fontSizes.FONT17,
        color: appColors.white,
        backgroundColor: appColors.primary,
        width: windowWidth(30),
        borderRadius: windowWidth(8),
        height: windowHeight(21),
        textAlignVertical: 'center',
        textAlign: 'center',
        marginHorizontal:windowHeight(2.5),
        fontFamily: 'mulishSemiBold',
     
    },
    nameView: { 
        marginLeft: windowWidth(4) 
    },
    nameTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color:appColors.black,
    },
    gramTxt: {
        fontSize: fontSizes.FONT20,
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
        textAlign:'left',
     
    },
    price: {
        fontSize: fontSizes.FONT24,
        fontFamily: 'mulishSemiBold',
        textAlign:'right',
        marginHorizontal:windowHeight(22)
    },
})
export default styles;