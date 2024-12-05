import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import { Header } from '../../../commonComponents/header'
import { OrderHistoryTime, ItemsView } from "./components";
import { SearchFilter } from "../../../commonComponents";
import { CommonModal, OrderHistoryFilterModal } from '../../../otherComponents/index';
import { useState } from "react";


export function OrderHistory({navigation}) {
    const [filterModal, setFilterModal] = useState(false);


    const visibleFilterModal = () => {
        setFilterModal(!filterModal)
    }

    const home=()=>{
        navigation.navigate('Home')
    }


    return (
        <SafeAreaView style={styles.view}>
            <Header
            imageOnPress={home}
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



