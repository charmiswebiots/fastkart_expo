import React from "react";
import { View } from "react-native";
import appColors from "../../../../theme/appColors";
import Styles from "./styles";

export const ImageLoader = (props) => {
    return (
        <View style={[Styles.imgLoader, { backgroundColor: props.context.isDark ? appColors.darkDrawer : appColors.gray }]} />
    )
}