import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
  img: {
      width: windowWidth(32),
      height: windowHeight(32),
      resizeMode: 'contain',
    },
  tabBar: {
    height: windowHeight(58),
    justifyContent: 'center',
    backgroundColor: appColors.primary,
  },
  text: {
    fontSize: fontSizes.FONT3HALF,
    fontFamily: "mulishsemiBold",
    color: appColors.white,
    top: windowHeight(5),
  },
  icon: {
    top: windowHeight(4),

  }
})
export default styles;