import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    price: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: windowHeight(5.5),
        backgroundColor: appColors.primary,
        width: '91%',
        alignSelf: 'center',
        borderRadius: windowWidth(7),
        paddingHorizontal: windowWidth(17),
        alignItems: 'center',
        paddingVertical: windowHeight(7),
    },
    listItem: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
        color: appColors.white,
    },

    viewCart: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
        color: appColors.white,
        top: windowHeight(2),
    },
})
export default styles;