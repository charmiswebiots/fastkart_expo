import React from "react";
import { View } from "react-native";
import { windowWidth } from "../../../../../theme/appConstant";
import Appcolor from "../../../../../theme/colors";
import { Loader } from "../../../../../commonComponents";
import Styles from "./styles";

const ratings = [{}, {}]

export default reviewViewLoader = (props) => {
    return (
        ratings.map(() =>
            <View style={[Styles.reviewView, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray, }]}>
                <View style={[Styles.ratingsView, { flexDirection: props.viewAlign }]}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={Styles.ratingImgLoader} />
                        }
                    />
                    <View style={props.context.isRTL ? Styles.reviewerLoader : Styles.reviewerLoaderRight}>
                        <Loader
                            context={props.context}
                            view={
                                <View style={Styles.reviewerNameLoader} />
                            }
                        />
                        <View style={[Styles.ratingStarLoader, { alignSelf: props.selfAlign }]}>
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.starLoader} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.starsLoader} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.starsLoader} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.starsLoader} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={Styles.starsLoader} />
                                }
                            />
                        </View>
                    </View>
                </View>
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.reviewLoader, { width: windowWidth(300), alignSelf: props.selfAlign }]} />
                    }
                />
                <Loader
                    context={props.context}
                    view={
                        <View style={[Styles.reviewLoader, { width: windowWidth(180), alignSelf: props.selfAlign }]} />
                    }
                />
            </View>
        )
    )
}