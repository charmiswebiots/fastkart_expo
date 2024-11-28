import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Counter } from "../counter";

export function Product(props) {
    return (
        <View style={[styles.mainView, {
        }]}>
            <Image source={props.image} style={styles.image} resizeMode='contain' />
            <View style={styles.lineView} />
            <View style={styles.counterView}>
                <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
                    <Text style={[styles.name, {
                    }]}>{props.name}</Text>
                    <Text style={[styles.weight, {
                    }]}>{props.weight}</Text>
                </TouchableOpacity>
                <View style={[styles.priceView, {
                }]}>
                    <View style={[styles.discountPriceView, {
                    }]}>
                        <Text style={[styles.price]}>{props.price}</Text>

                        <View style={[styles.discountView, {
                        }]}>
                            <Text style={styles.discount}>{props.discount}% </Text>
                            <Text style={styles.discount}>off</Text>
                        </View>
                    </View>
                    <Counter />
                </View>
               
            </View>
        </View>
    )
}