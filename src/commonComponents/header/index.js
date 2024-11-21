import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";

export function Header({
    text,
    onPress,
    firstIcon,
    isText,
    titleText,
    lightImage,
    showImage,
    image,
    imageOnPress,
}) {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.arrowView} onPress={onPress}>
                {firstIcon ? (
                    firstIcon
                ) : (
                    <View>
                        <Icons.headerArrow />
                    </View>
                )}

                {isText ? (
                    <Text style={[styles.text, styles.headerImg]}>{titleText}</Text>
                ) : (
                    <Image
                        source={lightImage}
                        style={[styles.headerImg]}
                    />
                )}
            </TouchableOpacity>

            <Text style={styles.propText}>{text}</Text>

            {showImage ? (
                <Image source={image} style={styles.image} />
            ) : (
                <TouchableOpacity activeOpacity={0.7} onPress={imageOnPress}>
                    {image ? image : <Icons.home />}
                </TouchableOpacity>
            )}
        </View>
    );
}
