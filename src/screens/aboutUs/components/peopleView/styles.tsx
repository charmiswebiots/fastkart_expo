import { windowHeight,fontSizes,windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    peopleWhoBuild: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold',
        marginHorizontal:windowHeight(14),
        marginTop: windowHeight(40),
        color:appColors.black,
    },
    list: {
        marginBottom: windowHeight(20),
    },
    columnStyle: {
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
    },
    seprator: {
    },
    socialView: {
        height: windowHeight(160),
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 0.5
    },
    buildView: {
        width: windowHeight(90),
        backgroundColor:appColors.drawer,
        height: windowHeight(90),
        alignItems: 'center',
        borderRadius: windowWidth(70)
    },
    buildImg: {
        width: windowWidth(110),
        height: windowHeight(70),
        top:windowHeight(8),
    },
    buildTxt: {
        fontFamily:'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color:appColors.black,
        marginTop: windowHeight(5),
    },
    social: {
        flexDirection: 'row',
        width: windowWidth(80),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
export default styles;