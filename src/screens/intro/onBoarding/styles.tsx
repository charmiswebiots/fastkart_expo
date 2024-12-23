import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        height: windowHeight(330),
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    contentView: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        paddingTop: windowHeight(30),
    },
    safeDelivery: {
        fontSize: fontSizes.FONT22,
        width: windowWidth(220),
        textAlign: 'center',
        marginTop: windowHeight(20),
        fontFamily: 'quickSandMedium',
    },
    onlineSupermarket: {
        fontSize: fontSizes.FONT20,
        width: windowWidth(428),
        textAlign: 'center',
        color: appColors.content,
        marginTop: windowHeight(14),
        fontFamily: 'nunitoSans',
    },
})
export default styles;