import React from "react";
import { View } from "react-native";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

export default detailViewLoader = (props) => {
    return (
        <View>
            <View style={Styles.detailView}>
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.detailLoader, { alignSelf: props.selfAlign }]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.detailTxtLoader, { alignSelf: props.selfAlign }]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.descLoader, { alignSelf: props.selfAlign }]} />
                    }
                />
            </View>
            <View style={Styles.detailView}>
                <View style={[Styles.optionMainView, { flexDirection: props.viewAlign }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.optionTitleLoader} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[Styles.iconLoader, { alignSelf: props.selfAlign }]} />
                        }
                    />
                </View>
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.detailTxtLoader, { alignSelf: props.selfAlign }]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.descLoader} />
                    }
                />
            </View>
            <View style={[Styles.optionsLoader, { borderBottomWidth: 0.5, flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.detailsLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.iconLoader} />
                    }
                />
            </View>
            <View style={[Styles.optionsLoader, { flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.detailsLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.iconLoader} />
                    }
                />
            </View>
            <View style={[Styles.optionsLoader, { flexDirection: props.viewAlign }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.featureOptionLoader} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={Styles.featureLoader} />
                    }
                />
            </View>
        </View>
    )
}