import { StyleSheet } from "react-native";
import {
    windowHeight, fontSizes, windowWidth, IsIOS
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    offersView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(10),
        marginTop: windowHeight(0),
        flexDirection: 'row',
        backgroundColor: appColors.gray,
    },
    alertView: {
        height: windowHeight(50),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    line: {
        position: 'absolute',
        width: windowWidth(90),
        height: windowHeight(2),
        backgroundColor: appColors.primary,
        alignSelf: 'center',
        bottom: windowHeight(2.5),
    },
    alert: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        textAlignVertical: 'center',
        height: IsIOS ? windowHeight(50) : windowHeight(60),
        paddingTop: IsIOS ? windowHeight(15) : 0,
        width: windowWidth(90),
        textAlign: 'center'
    },
    lineViewLeft: {
        marginLeft: windowWidth(30)
    },
    lineViewRight: {
        marginRight: windowWidth(30)
    },
    readView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    readTxt: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color: appColors.primary,
        marginHorizontal: windowWidth(8)
    },
})
export default styles;