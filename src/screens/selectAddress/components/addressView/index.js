import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import appColors from "../../../../theme/appColors";
import images from "../../../../utils/images";
import { windowHeight } from "../../../../theme/appConstant";
import { Icons } from "../../../../utils/icons";
import { location } from '../../../../screens/data'
import { useState } from "react";

export function AddressView() {

    const [isDefault, setIsDefault] = useState(0);

    const setDefault = (value) => {
        setIsDefault(value)
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            {location.map((item, key) =>
                <TouchableOpacity onPress={() => setDefault(key)} activeOpacity={0.8} style={[styles.list, { borderWidth: key === isDefault ? windowHeight(2) : 0, backgroundColor: appColors.gray, flexDirection: 'row' }]}>
                    <View>
                        <View style={[styles.optionView, { flexDirection: 'row' }]}>
                            {item.isWork ? <Icons.work /> : <Icons.home />}
                            <Text style={[styles.optionTxt, { color: appColors.black }]}>{item.isWork ? ('Work') : ('Home')}  </Text>
                            {key === 0 &&
                                <Text style={styles.default}>Default</Text>}
                        </View>
                        <Text style={[styles.name, { color: appColors.black, textAlign: 'left' }]}>{item.name}</Text>
                        <Text style={[styles.add, { textAlign: 'left' }]}>{item.address}</Text>
                    </View>
                    <Image source={images.addressMap} style={styles.addMap} />
                </TouchableOpacity>)}
        </ScrollView>
    )
}