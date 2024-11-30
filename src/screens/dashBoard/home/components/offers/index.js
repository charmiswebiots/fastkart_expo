import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../../components";
import { Product } from "../../../../../commonComponents";
import { offers } from "../../../../data";

export function Offers({onPress}) {

    const productDetails=()=>{
        navigation.navigate('ProductsDetails')
    }
    return (
        <View style={[styles.mainView]}>

            <SeeAllHeader title={'Say hello to Offers!'} subtitle={'Best price ever of all the time'} />
            {
                offers.map((item) =>
                    <View style={styles.view}>
                    <Product
                        image={item.image}
                        name={item.name}
                        weight={item.weight}
                        price={item.price}
                        discount={item.discount}
                        onPress={onPress}
                        showColor
                    />
                    </View>
                )}
        </View>
    )
}