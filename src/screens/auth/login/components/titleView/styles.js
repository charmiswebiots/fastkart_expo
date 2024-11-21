import appColors from "../../../../../theme/appColors";
import { StyleSheet } from "react-native";
import { fontSizes, windowHeight } from "../../../../../theme/appConstant";



const styles = StyleSheet.create({
    fastkartImg: {
        marginTop: windowHeight(40),
    },
    online: {
        marginTop: windowHeight(20),
        fontFamily: 'nunitoSans',
        color: appColors.content,
        fontSize: fontSizes.FONT18,
        textAlign:'left',
        alignSelf:'flex-start',
    },
})
export default styles;