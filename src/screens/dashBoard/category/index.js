import { SafeAreaView, ScrollView, View } from "react-native";
import { Header, Input } from '../../../commonComponents'
import images from '../../../utils/images'
import styles from "./styles";
import { Icons } from "../../../utils/icons";
import { CategoryView, BannerView, SubCategoryView } from "./components";

export function Category({ navigation }) {
    return (
        <SafeAreaView style={styles.mainView}>
            <Header
                onPress={() => navigation.goBack()}
                lightImage={images.fastkart}
                showImage
                text={'dsf'}
                image={images.offer} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} />
                <View style={[styles.dataView]}>
                    <CategoryView  />
                    <View style={[styles.vegiesRight]}>
                        <BannerView />
                        <SubCategoryView  />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}