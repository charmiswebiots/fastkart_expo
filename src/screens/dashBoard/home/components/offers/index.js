import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../../components";
import { Product } from "../../../../../commonComponents";
import { offers } from "../../../../data";

export function Offers() {
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
                        showColor
                        // onPress={goToDetail}
                        // textAlign={props.textAlign}
                        // viewAlign={props.viewAlign}
                        // imageAlign={props.imageAlign}
                    />
                    </View>
                )}
        </View>
    )
}