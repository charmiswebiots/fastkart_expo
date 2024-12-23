import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
  img: {
      width: windowWidth(32),
      height: windowHeight(32),
      resizeMode: 'contain',
      bottom:windowHeight(2)
    },
  tabBar: {
    height: windowHeight(58),
    justifyContent: 'center',
    backgroundColor: appColors.primary,
  },
  icon: {
    top: windowHeight(3),
    height:windowHeight(25)

  }
})
export default styles;