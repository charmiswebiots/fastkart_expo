import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    container: {
        padding: windowHeight(0),
        marginHorizontal:windowHeight(15),
        marginVertical:windowHeight(5),
        top:windowHeight(4)
    },
    rangeText: {
        right: windowHeight(15),
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
        backgroundColor: appColors.gray,
        paddingVertical: windowHeight(2),
        borderRadius: windowHeight(4),
        paddingHorizontal: windowHeight(10),
        marginBottom: windowHeight(10),
        top: windowHeight(18)
    },
    rangeText1: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(108),
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
        backgroundColor: appColors.gray,
        paddingVertical: windowHeight(2),
        justifyContent: 'flex-end',
        marginHorizontal: windowWidth(220),
        borderRadius: windowHeight(4),
        paddingHorizontal: windowHeight(10),
        top: windowHeight(18)
    },
    sliderContainer: {
        width: '100%',
        height: windowHeight(10),
        justifyContent: 'center',
    },
    track: {
        height: windowHeight(3),
        backgroundColor: appColors.lightWhite,
        position: 'absolute',
        width: windowWidth(415),
        alignSelf: "center",
    },
    highlight: {
        height: windowHeight(3),
        backgroundColor: appColors.primary,
    },
    thumb: {
        position: 'absolute',
        width: windowHeight(16),
        height: windowHeight(16),
        borderRadius: windowHeight(8),
        backgroundColor: appColors.primary,
    },
})
export default styles;