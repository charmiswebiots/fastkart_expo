import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { recentlySearch } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";

export function RecentlySearchView() {
    const {colors}=useTheme()
    const {isDark,textRtlStyle,viewRtlStyle}=useValues()
    return (
        <View>
            <Text style={[styles.txt,{color:colors.text},{textAlign:textRtlStyle}]}>Recently Search</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.scrollView]}>
                {
                    recentlySearch.map((item) =>
                        <Text style={[styles.name,{color:colors.text},{backgroundColor:isDark?colors.primary:appColors.drawer}]}>{item.name}</Text>
                    )}
            </ScrollView>
        </View>
    )
}