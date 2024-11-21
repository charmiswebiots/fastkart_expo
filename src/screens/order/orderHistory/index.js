import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import { Header } from '../../../commonComponents/header'
import { OrderHistoryTime, ItemsView } from "./components";
import { SearchFilter } from "../../../commonComponents";
import { CommonModal, OrderHistoryFilterModal } from '../../../otherComponents/index';
import { useState } from "react";


export function OrderHistory() {
    const [filterModal, setFilterModal] = useState(false);


    const visibleFilterModal = () => {
        setFilterModal(!filterModal)
    }


    return (
        <SafeAreaView style={styles.view}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={'Order History'} />
            <OrderHistoryTime />
            <View style={styles.container}>
                <SearchFilter onPress={visibleFilterModal} />
            </View>
            <ItemsView />
            <CommonModal
                modal={<OrderHistoryFilterModal showModal={visibleFilterModal} />}
                showModal={filterModal}
                visibleModal={visibleFilterModal} />
        </SafeAreaView>
    )
}



