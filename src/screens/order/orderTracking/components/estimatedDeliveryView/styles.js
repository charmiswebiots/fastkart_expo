import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    deliveryTime: {
        color: appColors.content,
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        alignSelf: 'center',
        marginTop: windowHeight(10)
    },
    trackingTime: {
        color: appColors.primary,
        fontSize: fontSizes.FONT26,
        fontFamily: 'mulishBold',
        alignSelf: 'center',
        width: '100%',
        textAlign: 'center',
        borderBottomWidth: 0.7,
        paddingBottom: windowHeight(16),
        borderBottomColor: appColors.placeholder
    },
})
export default styles;