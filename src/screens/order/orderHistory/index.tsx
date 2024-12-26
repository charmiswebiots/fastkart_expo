import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import { Header } from '../../../commonComponents/header';
import { OrderHistoryTime, ItemsView } from "./components";
import { SearchFilter } from "../../../commonComponents";
import { CommonModal, OrderHistoryFilterModal } from '../../../otherComponents/index';
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

interface OrderHistoryProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function OrderHistory({ navigation }: OrderHistoryProps): JSX.Element {
    const { t } = useValues();
    const { colors } = useTheme();
    const [filterModal, setFilterModal] = useState<boolean>(false);

    const visibleFilterModal = (): void => {
        setFilterModal(!filterModal);
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={[styles.view, { backgroundColor: colors.background }]}>
            <Header
                imageOnPress={home}
                onPress={() => navigation.goBack()}
                isText
                titleText={t('orderHistoryPage.orderHistoryTxt')} />
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
    );
}