import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(20),
        height:windowHeight(66),
    },
    view: {
        alignItems: 'center'
    },
    locationText: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        marginHorizontal:windowHeight(7.5),
    },
    profile: {
        width: windowWidth(50),
        height: windowHeight(50)
    },
    logoImg: {
        marginHorizontal:windowHeight(8),
        // resizeMode:'contain'
    },
})
export default styles;