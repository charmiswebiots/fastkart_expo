import { StyleSheet } from "react-native";
import { windowHeight,windowWidth ,fontSizes} from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT3HALF,
        fontFamily: "mulishsemiBold",
        color:appColors.white,
        top:windowHeight(8),
      },
      image: {
        height: windowHeight(7),
        width: windowWidth(14.5),
        marginTop: windowHeight(48),
        position: "absolute",
      },
      tabBar: {
        height: windowHeight(58),
        backgroundColor: appColors.primary,
      },
})
export default styles;