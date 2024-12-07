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
        marginHorizontal:windowWidth(18),
        alignItems: 'center',
        marginTop: windowHeight(20),
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
        marginHorizontal:windowWidth(3)
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
    },
    price: {
        fontSize: fontSizes.FONT24,
        fontFamily: 'mulishSemiBold',
        marginHorizontal:windowHeight(22)
    },
})
export default styles;