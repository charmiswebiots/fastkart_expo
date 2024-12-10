import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { Header, AddNew, Total, Button } from "../../commonComponents";
import { AddNewCardModal, CommonModal } from "../../otherComponents";
import { SelectValueView } from "./components";
import { windowHeight } from "../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function Payment({ navigation }) {
    const { isDark } = useValues()
    const { colors } = useTheme()
    const [showModal, setShowModal] = useState(false);

    const visibleModal = () => {
        setShowModal(!showModal)
    }

    const orderDetails = () => {
        navigation.navigate('OrderSuccess')
    }

    const home = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <CommonModal
                modal={<AddNewCardModal showModal={visibleModal} showModal1={visibleModal} />}
                showModal={showModal}
                visibleModal={() => setShowModal(false)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    imageOnPress={home}
                    titleText={'Add Payment Method'} />
                <AddNew onPress={visibleModal} text={'Add New Card'} />
                <SelectValueView />
                <View style={{ height: windowHeight(350), bottom: windowHeight(22) }}>
                    <Total bottom={windowHeight(80)} title={'Order Details'} style1={{ backgroundColor: isDark ? colors.primary : appColors.gray }} />
                </View>
                <Button text={'Confirm Payment'} style={styles.btn}
                    color={appColors.white} onPress={orderDetails} />
            </ScrollView>

        </SafeAreaView>
    )
}