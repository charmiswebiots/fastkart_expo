import React from "react";
import appColors from "../../theme/appColors";
import Skeleton from "react-native-skeleton-placeholder";
import { useValues } from "../../utils/context";



export function Loader(props) {
    const {isDark}=useValues()
    return (
        <Skeleton backgroundColor={props.isDark ? '#1c1c1c' : appColors.loaderBackground} highlightColor={props.isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}>
            {props.view}
        </Skeleton>
    )
}