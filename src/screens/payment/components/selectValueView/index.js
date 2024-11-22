import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import { useState } from "react";
import { payments } from "../../../data";

export function SelectValueView(props) {
    const [selectedPayment, setSelectedPayments] = useState(0);
    const [selectedMethod, setSelectedMethod] = useState(0);

    const selectPayment = (payment) => {
        setSelectedMethod(0);
        setSelectedPayments(payment);
    }

    const selectMethod = (method) => {
        setSelectedMethod(method)
    }
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={payments}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.list}
            renderItem={({ item, index }) =>
                <View style={styles.listView}>
                    <TouchableOpacity onPress={() => selectPayment(index)} style={[styles.arrowView]}>
                        <Text style={[styles.type]}>{item.type}</Text>
                        <View style={[styles.arrow]}>
                            <Icons.sideArrow />
                        </View>
                    </TouchableOpacity>
                    {selectedPayment === index ?
                        item.isCard ?
                            item.values.map((data, key) =>
                                <TouchableOpacity onPress={() => selectMethod(key)} activeOpacity={0.7} style={[styles.select, { borderWidth: selectedMethod === key ? 1 : 0, flexDirection: props.viewAlign }]}>
                                    <Image source={data.icons} style={styles.icon} />
                                    <Text style={[styles.value]}>{data.value}</Text>
                                    {selectedMethod === key &&
                                        <Icons.Selected />}
                                </TouchableOpacity>
                            )
                            :
                            <FlatList
                                data={item.values}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-between' }}
                                renderItem={({ item, index }) =>
                                    <View style={[styles.valueList, props.context.isRTL && { justifyContent: 'space-between' }]}>
                                        <TouchableOpacity activeOpacity={0.7} onPress={() => selectMethod(index)}>
                                            {selectedMethod === index ? <Icons.Selected /> : <Icons.unSelected />}
                                        </TouchableOpacity>
                                        <Text style={[styles.valueTxt, styles.valueLeft]}>{item.value}</Text>
                                    </View>
                                }
                            />
                        : null}
                </View>
            }
        />
    )
}