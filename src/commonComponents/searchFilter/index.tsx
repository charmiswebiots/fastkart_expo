



import React, { FC } from "react";
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";
import { Input } from "../input";
import { windowWidth } from "../../theme/appConstant";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";

interface SearchFilterProps {
    onPress: () => void;
}

export const SearchFilter: FC<SearchFilterProps> = ({ onPress }) => {
    const { viewRtlStyle, t } = useValues();
    return (
        <View style={[styles.inputView, { flexDirection: viewRtlStyle } as StyleProp<ViewStyle>]}>
            <Input 
                width={windowWidth(360)}  
                placeholder={t('commonText.searchProducts')} 
                rightIcon={<Icons.voiceSearch />} 
                leftIcon={<Icons.search />}  
                style={styles.input}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.filter}>{t('commonText.filter')}</Text>
            </TouchableOpacity>
        </View>
    );
}