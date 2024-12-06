import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { trendingProducts } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function TrendingProducts({ onPress }) {
    const {isDark}=useValues()
    const {colors}=useTheme()
    return (
        <View style={styles.view}>
            {trendingProducts.map((item, index) => (
                <View key={index} style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.gray}]}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                    <View style={styles.lineView} />
                    <View style={styles.counterView}>
                        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                            <Text style={[styles.name,{color:colors.text}]}>{item.name}</Text>
                            <Text style={styles.weight}>{item.weight}</Text>
                        </TouchableOpacity>
                        <View style={styles.priceView}>
                            <View style={styles.discountPriceView}>
                                <Text style={[styles.price,{color:colors.text}]}>{item.price}</Text>
                                <View style={styles.discountView}>
                                    <Text style={styles.discount}>{item.discount}% </Text>
                                    <Text style={styles.discount}>off</Text>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}
