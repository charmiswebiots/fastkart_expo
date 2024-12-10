import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mapImg: {
        width: '100%',
        height: '80%',
        marginTop: windowHeight(0.1)
    },
    inputView: { alignItems: 'center', alignSelf: 'center', alignContent: 'center', justifyContent: 'center' },
    truckView: {
        position: 'absolute',
        top: windowHeight(90),
        width: '94%',
        alignSelf: 'center',
        borderRadius: windowHeight(6),
        paddingVertical: windowHeight(10),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(16)
    },
    deliveryTime: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishSemiBold'
    },
    mapView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: windowHeight(320),
    },
    map: {
        height: windowHeight(39),
        width: windowHeight(40),
        borderRadius: windowHeight(20),
        backgroundColor: appColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        margin: windowHeight(20)
    },
    paymentView: {
        borderTopStartRadius: windowHeight(24),
        borderTopEndRadius: windowHeight(24),
        width: '100%',
        height: windowHeight(280),
        paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(20)
    },
    input: {
        paddingHorizontal: windowHeight(41),
        width: windowWidth(437),
    },
    locationView: {
        marginTop: windowHeight(15),
        alignItems: 'center',
        marginBottom: windowHeight(5)
    },
    location: {
        backgroundColor: appColors.primary,
        width: windowWidth(41),
        height: windowHeight(28),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(5)
    },
    locationTxt: {
        marginHorizontal: windowHeight(10),
        fontSize: fontSizes.FONT24,
        fontFamily: 'mulishSemiBold'
    },
    addView: {
        marginTop: windowHeight(10),
        paddingVertical: windowHeight(4),
    },
    nameView: {
        alignItems: 'center'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginHorizontal: windowHeight(10)
    },
    add: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop: windowHeight(6)
    },
    btn: {
        width: '100%',
        backgroundColor: appColors.primary,
        marginBottom: windowHeight(60)
    },
    mapPin: {
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
    },
})
export default styles;