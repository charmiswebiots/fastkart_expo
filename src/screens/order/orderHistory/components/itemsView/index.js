import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";


export function ItemsView() {
    const {colors}=useTheme()
    const { isDark } = useValues()

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={orderHistory}
            renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.passChange }]} key={item.id}>
                    <View style={[styles.subView]}>
                        <View>
                            <View style={styles.idView}>
                                <Text style={[styles.data,{color:colors.text}]}>ID: {item.id} , </Text>
                                <Text style={[styles.data,{color:colors.text}]}>Dt: {item.date}</Text>
                            </View>
                            <Text style={styles.add}>{item.add}</Text>
                            <View style={[styles.paidView]}>
                                <Text style={[styles.data,{color:colors.text}]}>Paid: <Text style={styles.paid}>{item.paid}, </Text></Text>
                                <Text style={[styles.data,{color:colors.text}]}>Items: <Text style={styles.paid}>{item.item}</Text></Text>
                            </View>
                        </View>
                        <Image source={images.orderHistoryMap} />
                    </View>
                    <View style={[styles.orderAgain]}>
                        <Text style={[styles.data,{color:colors.text}]}>Order Again</Text>
                        <Text style={styles.reteNReview}> Rate & Review Product</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}