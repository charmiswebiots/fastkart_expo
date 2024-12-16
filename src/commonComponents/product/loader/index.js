import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import { Loader } from "../../loader";
import { useValues } from "../../../utils/context";

const productArr = [{}, {}, {}, {}]


export default function ProductLoader(props) {
    const {isDark,rtl}=useValues()
    return (
        productArr.map(() =>
            <View style={[styles.mainView, { backgroundColor: isDark ? appColors.dark : appColors.gray, flexDirection: 'row' }]}>
                <Loader
                    context={props.context}
                    view={
                        <View style={styles.txtLoader} />
                    }
                />
                <View style={styles.lineView} />
                <View style={styles.counterView}>
                    <Loader
                        context={props.context}
                        view={
                            <View style={[styles.longTxtLoader, { alignSelf: "flex-start" }]} />
                        }
                    />
                    <Loader
                        context={props.context}
                        view={
                            <View style={[styles.imgLoader, { alignSelf: "flex-start"  }]} />
                        }
                    />
                    <View style={[styles.listView, { flexDirection:  'row'}]}>
                        <View style={[styles.subView, { flexDirection:  'row'}]}>
                            <Loader
                                context={props.context}
                                view={
                                    <View style={styles.view} />
                                }
                            />
                            <Loader
                                context={props.context}
                                view={
                                    <View style={[styles.imageLoader, props.rtl ? { marginRight: windowWidth(10) } : {
                                        marginLeft: windowWidth(10)
                                    }]} />
                                }
                            />
                        </View>
                        <Loader
                            context={props.context}
                            view={
                                <View style={styles.view} />
                            }
                        />
                    </View>
                </View>
            </View>
        )
    )
}