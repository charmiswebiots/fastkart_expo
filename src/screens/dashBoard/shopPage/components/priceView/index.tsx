import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import appColors from "../../../../../theme/appColors";
import { useNavigation } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

interface UseValues {
    viewRtlStyle: string;
    textRtlStyle: string;
    t: (key: string) => string;
    currSymbol: string;
    currValue: number;
}

export function PriceView(): JSX.Element {
    const { viewRtlStyle, textRtlStyle, t, currSymbol, currValue }: UseValues = useValues();
    const navigation = useNavigation();
    
    const cart = (): void => {
        navigation.navigate('Cart');
    }

    return (
        <View style={[styles.price, { flexDirection: viewRtlStyle }]}>
            <View>
                <Text style={styles.listItem}>{t('productList.listItems')}</Text>
                <Text style={[styles.listItem, { textAlign: textRtlStyle }]}>{currSymbol}{(250 * currValue).toFixed(2)}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={cart} style={{ flexDirection: "row" }}>
                <Text style={[styles.viewCart, { textAlign: textRtlStyle }]}>{t('productList.viewCart')}</Text>
                <View style={{ transform: [{ scaleX: 1 }] }}>
                    <Icons.sideArrow color={appColors.white} />
                </View>
            </TouchableOpacity>
        </View>
    );
}