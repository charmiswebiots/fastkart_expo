import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    contentView: {
        position: 'absolute',
        alignSelf: 'center',
    },
    title: {
        fontSize: fontSizes.FONT21,
        width: windowWidth(240),
        fontFamily: 'quickSandBold',
        alignSelf: 'center',
        color: appColors.title,
        textAlign: 'left'
    },
    subTitle: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(240),
        fontFamily: 'quickSandMedium',
        alignSelf: 'center',
        color: appColors.content,
        marginTop: windowHeight(4),
        textAlign: 'left'
    },
    view: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        right: windowHeight(130)
    },
    bannerImg: {
        width: windowWidth(280),
        height: windowHeight(140),
        borderRadius: windowHeight(16)
    },
})
export default styles;