import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../../components";
import { Product } from "../../../../../commonComponents";
import { offers } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function Offers({onPress}) {

    const {isDark}=useValues()
    const {colors}=useTheme()

    const productDetails=()=>{
        navigation.navigate('ProductsDetails')
    }
    return (
        <View style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.drawer}]}>

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