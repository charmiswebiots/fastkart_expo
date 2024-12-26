import React, { FC } from "react";
import { View, TouchableOpacity, Text, Image, ImageSourcePropType, StyleProp, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface HeaderProps {
    text: string;
    onPress: () => void;
    firstIcon?: React.ReactNode;
    isText: boolean;
    titleText: string;
    lightImage?: React.ReactNode;
    showImage: boolean;
    image?: ImageSourcePropType;
    titleText1?: string;
    imageOnPress?: () => void;
    lightStyle?: StyleProp<ViewStyle>;
    titleTextstyle?: StyleProp<TextStyle>;
}

export function Header({
    text,
    onPress,
    firstIcon,
    isText,
    titleText,
    lightImage,
    showImage,
    image,
    titleText1,
    imageOnPress,
    lightStyle,
    titleTextstyle,
}: HeaderProps) {
    const { colors } = useTheme();
    const { rtl, viewRtlStyle } = useValues();
    return (
        <View style={[styles.mainView, { flexDirection: viewRtlStyle }]}>
            <TouchableOpacity style={[styles.arrowView, { flexDirection: viewRtlStyle }]} onPress={onPress}>
                {firstIcon ? (
                    firstIcon
                ) : (
                    <View style={{ transform: [{ scaleX: rtl ? -1 : 1 }] }}>
                        <Icons.headerArrow />
                    </View>
                )}

                {isText ? (
                    <Text style={[styles.text, styles.headerImg, { color: colors.text }]}>
                        {titleText}
                        <Text style={[styles.text1, titleTextstyle]}>{titleText1}</Text>
                    </Text>
                ) : (
                    <View style={[styles.headerImg, lightStyle]}>{lightImage}</View>
                )}
            </TouchableOpacity>

            <Text style={styles.propText}>{text}</Text>

            {showImage ? (
                <Image source={image} style={styles.image} />
            ) : (
                <TouchableOpacity activeOpacity={0.7} onPress={imageOnPress}>
                    {image ? image : <Icons.home color={colors.text} />}
                </TouchableOpacity>
            )}
        </View>
    );
}