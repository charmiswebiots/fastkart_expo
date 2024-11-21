import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(28),
        textAlign:'left',
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationText: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        marginHorizontal:windowHeight(9),
    },
    profile: {
        width: windowWidth(50),
        height: windowHeight(50)
    },
    logoImg: {
        marginLeft: windowWidth(10)
    },
    logoRightImg: {
        marginRight: windowWidth(10)
    },
})
export default styles;