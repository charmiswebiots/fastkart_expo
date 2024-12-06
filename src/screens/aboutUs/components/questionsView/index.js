import { View, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { howIOrder } from "../../../data";
import { useValues } from "../../../../utils/context";
import appColors from "../../../../theme/appColors";

export function QuestionsView() {
    const {colors}=useTheme()
    const {isDark}=useValues()
    return (
        <View>
            <Text style={[styles.whoWeAre,{color:colors.text}]}>Who We Are?</Text>
            <Text style={styles.whoAreWe}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </Text>
            <Text style={[styles.howIOrder,{color:colors.text}]}>How do I order?
            </Text>
            {howIOrder.map((item, key) =>
                <View style={styles.questionView}>
                    <View style={[styles.answerView,{backgroundColor:isDark?colors.primary:appColors.gray}]}>
                        <Text style={styles.question}>{item.question}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </View>
                    <View style={styles.keyView}>
                        <Text style={styles.key}>{key + 1}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}