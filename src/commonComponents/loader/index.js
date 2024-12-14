import react from "react";
import appColors from "../../theme/appColors";
import Skeleton from "react-native-skeleton-placeholder";



export function Loader(props) {
    return (
        <Skeleton backgroundColor={props.context.isDark ? '#1c1c1c' : appColors.loaderBackground} highlightColor={props.context.isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}>
            {props.view}
        </Skeleton>
    )
}