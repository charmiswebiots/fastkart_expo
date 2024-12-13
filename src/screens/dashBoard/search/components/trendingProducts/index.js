import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { trendingProducts } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function TrendingProducts({ onPress }) {
    const {isDark,viewRtlStyle,textRtlStyle,t}=useValues()
    const {colors}=useTheme()
    return (
        <View style={styles.view}>
            {trendingProducts.map((item, index) => (
                <View key={index} style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.gray},{flexDirection:viewRtlStyle}]}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                    <View style={styles.lineView} />
                    <View style={styles.counterView}>
                        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                            <Text style={[styles.name,{color:colors.text},{textAlign:textRtlStyle}]}>{t(item.name)}</Text>
                            <Text style={[styles.weight,{textAlign:textRtlStyle}]}>{t(item.weight)}</Text>
                        </TouchableOpacity>
                        <View style={[styles.priceView,{flexDirection:viewRtlStyle}]}>
                            <View style={[styles.discountPriceView,{flexDirection:viewRtlStyle}]}>
                                <Text style={[styles.price,{color:colors.text}]}>{item.price}</Text>
                                <View style={[styles.discountView,{flexDirection:viewRtlStyle}]}>
                                    <Text style={styles.discount}>{item.discount}% </Text>
                                    <Text style={styles.discount}>{t('cartlist.off')}</Text>
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
