import React from "react";
import { View } from "react-native";
import Appcolor from "../../../../theme/colors";
import Styles from "./styles";

export const ImageLoader = (props) => {
    return (
        <View style={[Styles.imgLoader, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]} />
    )
}