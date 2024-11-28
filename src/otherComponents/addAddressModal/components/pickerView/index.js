import React from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import styles from "./styles";
import { windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

export function PickerView(props) {
    const setValue = (item) => {
        props.setInputValue(item.title);
    }

    return (
        <View pointerEvents={props.pointerEvents}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={props.onPress}
                style={[
                    styles.inputView,
                    {
                        width: props.width ? props.width : windowWidth(440),
                        borderColor: appColors.primary,
                        justifyContent: 'center',
                        backgroundColor: appColors.white,
                    }
                ]}
            >
                <Text style={[styles.txt, { textAlign: 'left', color: appColors.text }]}>
                    {props.value}
                </Text>
            </TouchableOpacity>
            {props.showValue && (
                <View
                    style={[
                        styles.list,
                        {
                            width: props.width ? props.width : windowWidth(440),
                            backgroundColor: appColors.white
                        }
                    ]}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentStyle}
                        data={props.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.lstView}
                                onPress={() => setValue(item)}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.listTxt, { textAlign: 'left', color: appColors.black }]}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            )}
        </View>
    );
}
