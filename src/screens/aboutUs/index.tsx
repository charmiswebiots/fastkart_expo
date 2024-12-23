// import { SafeAreaView,ScrollView,Image } from "react-native";
// import styles from "./styles";
// import images from "../../utils/images";
// import { Header } from "../../commonComponents";
// import { QuestionsView ,PeopleView} from './components';
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function AboutUs({navigation}){
//     const {colors}=useTheme()
//     const {t}=useValues()
//     const home = () => {
//         navigation.navigate('Home')
//     }
//     return(
//         <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//             <Header
//                 onPress={() => navigation.goBack()}
//                 isText
//                 titleText={t('aboutUsPage.aboutUsTxt')}  imageOnPress={home}/>
//             <Image source={images.aboutUs} style={styles.img} resizeMode='contain' />
//             <QuestionsView  />
//             <PeopleView/>
//         </ScrollView>
//     </SafeAreaView>
//     )
// }



import { SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Header } from "../../commonComponents";
import { QuestionsView, PeopleView } from './components';
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface AboutUsProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function AboutUs({ navigation }: AboutUsProps): JSX.Element {
    const { colors } = useTheme();
    const { t } = useValues();
    const home = (): void => {
        navigation.navigate('Home');
    }
    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('aboutUsPage.aboutUsTxt')}
                    imageOnPress={home} />
                <Image source={images.aboutUs} style={styles.img} resizeMode='contain' />
                <QuestionsView />
                <PeopleView />
            </ScrollView>
        </SafeAreaView>
    )
}