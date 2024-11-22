import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";
import appColors from "../../../../../theme/appColors";

export default optionViewLoader = (props) => {
    return (
        <View style={Styles.optionView}>
            <View style={[Styles.optionLoader, { backgroundColor: props.context.isDark ? appColors.darkDrawer : appColors.gray, flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.optionDataLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.optionIconLoader} />
                    }
                />
            </View>
            <View style={[Styles.optionLoader, { backgroundColor: props.context.isDark ? appColors.darkDrawer : appColors.gray, flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.optionDataLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.optionIconLoader} />
                    }
                />
            </View>
        </View>
    )
}