import { ScrollView, SafeAreaView,Image } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../../styles/style";
import appColors from "../../../theme/appColors";
import { Header,Total, Button } from "../../../commonComponents";
import images from "../../../utils/images";
import { ThankyouView,OrderDataView } from "./components";
import { Icons } from "../../../utils/icons";

export function OrderSuccess() {
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.toggleDrawer()}
                    isText={false}
                    showImage={false}
                    firstIcon={<Icons.category />}
                    lightImage={images.fastkart}
                />
                <Image source={images.orderSuccess} style={styles.orderSuccess} />
                <ThankyouView/>
                <OrderDataView/>
                <Total style title={'Order Details'}/>
                <Button text={'Track Package on Map'} style={styles.btn} color={appColors.white}  />

            </ScrollView>

        
        </SafeAreaView>
    )
}