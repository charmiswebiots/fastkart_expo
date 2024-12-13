import { SafeAreaView, ScrollView, View } from "react-native";
import { Header, Input } from '../../../commonComponents'
import images from '../../../utils/images'
import styles from "./styles";
import { Icons } from "../../../utils/icons";
import { CategoryView, BannerView } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function Category({ navigation }) {
    
    const {colors}=useTheme()
    const {isDark,viewRtlStyle,t}=useValues()

    const shopPage = () => {
        navigation.navigate('ShopPage')
    }
    return (
        <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
            <Header
                onPress={() => navigation.goBack()}
                lightImage={isDark?images.fastKartDark:images.fastkart}
                showImage
                image={images.offer} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <Input placeholder={t('commonText.searchProducts')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                <View style={[styles.dataView,{flexDirection:viewRtlStyle}]}>
                    <CategoryView onPress={shopPage} />
                    <View style={[styles.vegiesRight]}>
                        <BannerView />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}