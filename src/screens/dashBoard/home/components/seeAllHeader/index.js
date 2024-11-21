import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export function SeeAllHeader({ title, subtitle, onPress }) {
    return (
        <View style={[styles.mainView]}>
            <View>
                <Text style={[styles.title]}>{title}</Text>
                <Text style={styles.subTitle}>{subtitle}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}