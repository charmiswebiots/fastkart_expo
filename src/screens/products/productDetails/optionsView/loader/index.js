import React from "react";
import { View } from "react-native";
import Appcolor from "../../../../../theme/colors";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default optionViewLoader = (props) => {
    return (
        <View style={Styles.optionView}>
            <View style={[Styles.optionLoader, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
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
            <View style={[Styles.optionLoader, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, flexDirection: props.viewAlign }]}>
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