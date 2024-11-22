import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

export default priceViewStyles = StyleSheet.create({
    price: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: windowHeight(80),
        backgroundColor: appColors.primary,
        width: '96%',
        alignSelf: 'center',
        borderRadius: windowWidth(4),
        paddingHorizontal: windowWidth(10),
        alignItems: 'center',
        paddingVertical: windowHeight(10)
    },
    listItem: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
        color: appColors.white
    },
    arrow: {
        flexDirection: 'row'
    },
    viewCart: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
        color: appColors.white,
        marginRight: windowWidth(6)
    },
});