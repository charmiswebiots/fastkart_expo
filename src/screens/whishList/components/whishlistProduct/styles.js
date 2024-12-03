import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    container: {
        gap: 17,
        top: windowHeight(3.5),
    },
    icon: {
        marginHorizontal: windowHeight(263),
    },
    deleteButton: {
        backgroundColor: appColors.primary,
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight(86.5),
        top: windowHeight(1),
        borderRadius: windowHeight(10),
        width: windowWidth(100),
        marginHorizontal: windowHeight(15)
    },
    mainView: {
        width: '91%',
        marginTop: windowHeight(0),
        paddingVertical: windowHeight(5),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: appColors.gray,
    },
    deleteIconContainer: {
        width: '91%',
        top: windowHeight(0),
        height: windowHeight(84),
        backgroundColor: appColors.primary,
        borderRadius: windowHeight(12),
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(80),
        left:windowHeight(12)
    },
    lineView: {
        width: windowWidth(1),
        height: windowHeight(50),
        backgroundColor: appColors.placeholder,
        left:windowHeight(21)
    },
    counterView: {
        marginHorizontal:windowWidth(45),
        justifyContent: 'center'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
    },
    weight: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
    priceView: {
        justifyContent: 'space-between',
        width: windowWidth(290),
        marginTop: windowHeight(6),
        flexDirection: 'row',
    },
    discountPriceView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    price: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
    },
    discountView: {
        backgroundColor: appColors.primary,
        width: windowWidth(88),
        height: windowHeight(20),
        borderRadius: windowHeight(24),
        marginHorizontal: windowHeight(8),
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(15),
        alignItems: 'center',
        flexDirection: 'row',
    },
    discount: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: appColors.white,
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT15
    },
})
export default styles;