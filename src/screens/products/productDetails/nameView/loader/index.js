import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default nameView = (props) => {
    return (
        <View>
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.titleLoader, { alignSelf: props.selfAlign }]} />
                }
            />
            <Loader
                context={props.context}
                view={
                    <View style={[Styles.ratingsLoader, { alignSelf: props.selfAlign }]} />
                }
            />
            <View style={[Styles.priceView, { flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.priceLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.priceLoader, props.context.isRTL ? Styles.view : Styles.viewRight]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.priceLoader, props.context.isRTL ? Styles.view : Styles.viewRight]} />
                    }
                />
            </View>
        </View>
    )
}