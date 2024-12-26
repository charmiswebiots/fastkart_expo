import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../../components";
import { Product } from "../../../../../commonComponents";
import { offers } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useNavigation } from "@react-navigation/native";

export function Offers({ onPress }) {
    const { isDark, t } = useValues();
    const { colors } = useTheme();

const navigation=useNavigation()

const category=()=>{
    navigation.navigate('Category')
}




    return (
        <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}>
            <SeeAllHeader title={t('homepage.sayHelloOffers')} subtitle={t('homepage.bestPrice')} onPress={category}/>

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
    );
}
