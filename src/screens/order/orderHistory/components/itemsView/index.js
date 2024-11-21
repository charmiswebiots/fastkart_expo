import { View,FlatList,TouchableOpacity,Text,Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";


export function ItemsView() {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={orderHistory}
            renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.8}  style={[styles.listView]}key={item.id}>
                    <View style={[styles.subView]}>
                        <View>
                            <View style={styles.idView}>
                                <Text style={[styles.data]}>ID: {item.id} , </Text>
                                <Text style={[styles.data]}>Dt: {item.date}</Text>
                            </View>
                            <Text style={styles.add}>{item.add}</Text>
                            <View style={[styles.paidView]}>
                                <Text style={[styles.data]}>Paid: <Text style={styles.paid}>{item.paid}, </Text></Text>
                                <Text style={[styles.data]}>Items: <Text style={styles.paid}>{item.item}</Text></Text>
                            </View>
                        </View>
                        <Image source={images.orderHistoryMap} />
                    </View>
                    <View style={[styles.orderAgain]}>
                        <Text style={[styles.data]}>Order Again</Text>
                        <Text style={styles.reteNReview}> Rate & Review Product</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}