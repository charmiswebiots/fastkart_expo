import { View, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { howIOrder } from "../../../data";
import { useValues } from "../../../../utils/context";
import appColors from "../../../../theme/appColors";

export function QuestionsView() {
    const { colors } = useTheme()
    const { isDark ,t} = useValues()
    return (
        <View>
            <Text style={[styles.whoWeAre, { color: colors.text }]}>{t('aboutUsPage.whoWeAre')}</Text>
            <Text style={styles.whoAreWe}>{t('aboutUsPage.whoArewe')}</Text>
            <Text style={[styles.howIOrder, { color: colors.text }]}>{t('aboutUsPage.howIOrder')}
            </Text>
            {howIOrder.map((item, key) =>
                <View style={styles.questionView}>
                    <View style={[styles.answerView, { backgroundColor: isDark ? colors.primary : appColors.gray }]}>
                        <Text style={styles.question}>{t(item.question)}</Text>
                        <Text style={styles.answer}>{t(item.answer)}</Text>
                    </View>
                    <View style={styles.keyView}>
                        <Text style={styles.key}>{key + 1}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}