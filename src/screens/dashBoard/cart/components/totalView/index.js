import React from "react";
import { View } from "react-native";
import { Total,Button } from "../../../../../commonComponents";
import appColors from "../../../../../theme/appColors";
import styles from "./styles";



export function TotalView({onPress}){
    return(
        <View style={styles.total}>
            <Total title={'Order Details'} />
                <Button text={'Proceed to Checkout'} style={styles.btn}
                    color={appColors.white} onPress={onPress} />
        </View>
    )
}