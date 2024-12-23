import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import { windowHeight, fontSizes,windowWidth } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: windowHeight(18)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
        marginTop:windowHeight(3)
    },
    txtLeft: {
        marginHorizontal:windowHeight(12)
    },
    txtRight: {
        marginHorizontal: windowWidth(20),
    },
    arrow: {
        borderWidth: 0.5,
        width: windowHeight(24),
        height: windowHeight(24),
        borderRadius: windowHeight(12),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: appColors.drawer, 
        backgroundColor: appColors.drawer 
    },
})
export default styles;