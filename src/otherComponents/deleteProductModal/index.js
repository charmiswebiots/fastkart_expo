import React from "react";
import styles from "./styles";
import { View ,Text} from "react-native";
import { OptionButton } from "../../commonComponents";

export function DeleteProductModal(props) {
    return (
        <View style={[styles.mainView]}>
            <Text style={[styles.sure]}>Are You Sure?</Text>
            <Text style={styles.txt}>The permission for the use/group, preview is inherited from the object, Modifiying it for this object will create a new permission for this object</Text>
            <OptionButton
                txt1={'Close'}
                txt2={'Remove'}
                onPress1={props.onPress}
                onPress2={props.onPress}
            />
        </View>
    )
}