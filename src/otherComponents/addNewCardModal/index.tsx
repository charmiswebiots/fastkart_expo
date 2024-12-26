import { View, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { GlobalStyle } from "../../styles/style";
import { Input, OptionButton } from "../../commonComponents";
import { useState, FC } from "react";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

interface AddNewCardModalProps {
    showModal: () => void;
    showModal1: () => void;
}

export const AddNewCardModal: FC<AddNewCardModalProps> = ({ showModal, showModal1 }) => {
    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t } = useValues();
    const [inputValue, setInputValue] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');

    const validateExpiryDate = (date: string): boolean => {
        const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!regex.test(date)) {
            return false;
        }

        const [month, year] = date.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            return false;
        }

        return true;
    };

    const handleChange = (text: string): void => {
        const formattedText = text.replace(/[^0-9]/g, '');

        if (formattedText.length > 2) {
            const month = formattedText.slice(0, 2);
            const year = formattedText.slice(2);
            setExpiryDate(`${month}/${year}`);
        } else {
            setExpiryDate(formattedText);
        }
        validateExpiryDate(formattedText);
    };

    const handleChange1 = (text: string): void => {
        const numericText = text.replace(/\D/g, '');

        let formattedText = '';
        for (let i = 0; i < numericText.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedText += ' ';
            }
            formattedText += numericText[i];
        }
        setInputValue(formattedText);
    };

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <Text style={[styles.addCard, { textAlign: textRtlStyle }, { color: colors.text }]}>{t('addCard.addCard')}</Text>
            <View style={styles.mainView}>
                <Input
                    placeholder={t('addCard.cardHolderName')}
                    style={styles.input} />
                <Input
                    placeholder={t('addCard.cardNum')}
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={19}
                    value={inputValue}
                    onChangeText={handleChange1} />
                <View style={[styles.inputView, { flexDirection: viewRtlStyle }]}>
                    <Input
                        placeholder={t('addCard.expiryDate')}
                        style={styles.input1}
                        value={expiryDate}
                        onChangeText={handleChange}
                        keyboardType={'numeric'}
                        maxLength={5}
                        rightIcon={<Icons.calender />} />
                    <Input
                        placeholder={t('addCard.cvv')}
                        style={styles.input1}
                        keyboardType={'numeric'}
                        maxLength={3} />
                </View>
            </View>
            <OptionButton
                txt1={t('commonText.close')}
                txt2={t('productDetailsPage.add')}
                onPress1={showModal}
                onPress2={showModal1}
            />
        </View>
    );
}