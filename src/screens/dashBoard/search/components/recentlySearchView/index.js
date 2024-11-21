import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import { recentlySearch } from "../../../../data";

export function RecentlySearchView() {
    return (
        <View>
            <Text style={[styles.txt]}>Recently Search</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {
                    recentlySearch.map((item) =>
                        <Text style={[styles.name]}>{item.name}</Text>
                    )}
            </ScrollView>
        </View>
    )
}