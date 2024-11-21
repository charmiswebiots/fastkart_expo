import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity, View } from 'react-native'
import Styles from './styles';
import Data from '../../../../utils/json';
import { windowWidth } from '../../../../theme/appConstant';
import Appcolor from "../../../../theme/colors";
import Loader from "./loader";

export default categoryView = (props) => {

    const [productCategory] = useState(Data.productCategory);
    const [selectCategory, setSelectCategory] = useState(0);

    const selectedCategory = (key) => {
        setSelectCategory(key)
    }

    return (
        <ScrollView style={[Styles.list, { backgroundColor: props.context.isDark ? Appcolor.darkDrawer : Appcolor.gray }]} horizontal showsHorizontalScrollIndicator={false}>
            <View style={[Styles.category, { flexDirection: props.viewAlign }]}>
                {props.showLoader ? <Loader context={props.context} /> :
                    productCategory.map((item, key) =>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => selectedCategory(key)}>
                            <Text key={key} style={[Styles.name, { color: key === selectCategory ? Appcolor.primary : props.colors.text, marginLeft: key != 0 ? windowWidth(16) : windowWidth(0) }]}>{props.t(item.name)}</Text>
                        </TouchableOpacity>
                    )}
            </View>
        </ScrollView>
    )
}