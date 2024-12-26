import { SafeAreaView, ScrollView, View } from "react-native";
import { Header, Input } from '../../../commonComponents';
import images from '../../../utils/images';
import styles from "./styles";
import { Icons } from "../../../utils/icons";
import { CategoryView, BannerView } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";
import { windowHeight } from "../../../theme/appConstant";

interface CategoryProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function Category({ navigation }: CategoryProps): JSX.Element {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t } = useValues();

    const shopPage = (): void => {
        navigation.navigate('ShopPage');
    };

    // const offers=():void=>{
    //     navigation.navigate('Offers');
    //     // console.log('sdfsf')
    // }
const onPressOffer=()=>{
    console.log('====================================');
    console.log("press");
    console.log('====================================');
}
    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                lightImage={isDark ? <Icons.faskartLogoDark /> : <Icons.faskartLogo />}
                lightStyle={{ right: windowHeight(4) }}
                showImage
                imageOnPress={onPressOffer}
                image={images.offer} 
                />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Input placeholder={t('commonText.searchProducts')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                <View style={[styles.dataView, { flexDirection: viewRtlStyle }]}>
                    <CategoryView onPress={shopPage} />
                    <View style={[styles.vegiesRight]}>
                        <BannerView />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}