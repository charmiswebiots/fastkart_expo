import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { trendingProducts } from "../../../../data";
import { Counter } from "../../../../../commonComponents";

export function TrendingProducts() {
    return (
        <View style={styles.view}>
            {trendingProducts.map((item, index) => (
                <View key={index} style={styles.mainView}>
                    <Image source={item.image} style={styles.image} resizeMode='contain' />
                    <View style={styles.lineView} />
                    <View style={styles.counterView}>
                        <TouchableOpacity onPress={item.onPress} activeOpacity={0.7}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.weight}>{item.weight}</Text>
                        </TouchableOpacity>
                        <View style={styles.priceView}>
                            <View style={styles.discountPriceView}>
                                <Text style={styles.price}>{item.price}</Text>
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
