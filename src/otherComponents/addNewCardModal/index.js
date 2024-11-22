import { View, Text } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { Icons } from "../../utils/icons";
import { windowHeight } from "../../theme/appConstant";
import { GlobalStyle } from "../../styles/style";
import { Input, OptionButton } from "../../commonComponents";
import { useState } from "react";

export function AddNewCardModal({ showModal, showModal1 }) {
    const [inputValue, setInputValue] = useState('');

    const [expiryDate, setExpiryDate] = useState('');

    const validateExpiryDate = (date) => {
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

    const handleChange = (text) => {
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

    const handleChange1 = (text) => {
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
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white }]}>
            <Text style={[styles.addCard]}>Add Card</Text>
            <View style={{ paddingVertical: windowHeight(1), gap: 20, marginTop: windowHeight(15) }}>
                <Input
                    placeholder={'Card Holder Name'}
                    style={styles.input} />
                <Input
                    placeholder={'Card Number'}
                    style={styles.input}
                    keyboardType={'numeric'}
                    maxLength={19}
                    value={inputValue}
                    onChangeText={handleChange1} />
                <View style={styles.inputView}>
                    <Input
                        placeholder={'Expiry Date'}
                        style={styles.input1}
                        value={expiryDate}
                        onChangeText={handleChange}
                        keyboardType={'numeric'}
                        maxLength={5}
                        rightIcon={<Icons.calender color={appColors.black} />} />
                    <Input
                        placeholder={'CVV'}
                        style={styles.input1}
                        keyboardType={'numeric'}
                        maxLength={3} />
                </View>
            </View>
            <OptionButton
                txt1={'Close'}
                txt2={'Add'}
                onPress1={showModal}
                onPress2={showModal1}

            />
        </View>
    )
}