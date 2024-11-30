import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { Header, AddNew, Total, Button } from "../../commonComponents";
import { AddNewCardModal, CommonModal } from "../../otherComponents";
import { SelectValueView } from "./components";
import { windowHeight } from "../../theme/appConstant";

export function Payment({navigation}) {
    const [showModal, setShowModal] = useState(false);

    const visibleModal = () => {
        setShowModal(!showModal)
    }

    const orderDetails=()=>{
        navigation.navigate('OrderSuccess')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <CommonModal
                modal={<AddNewCardModal showModal={visibleModal} showModal1={visibleModal} />}
                showModal={showModal}
                visibleModal={() => setShowModal(false)} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={'Add Payment Method'} />
                <AddNew onPress={visibleModal} text={'Add New Card'} />
                <SelectValueView />
                <View style={{ height: windowHeight(350), bottom: windowHeight(22) }}>
                    <Total bottom={windowHeight(80)} style title={'Order Details'} />
                </View>
                <Button text={'Confirm Payment'} style={styles.btn}
                    color={appColors.white} onPress={orderDetails} />
            </ScrollView>

        </SafeAreaView>
    )
}