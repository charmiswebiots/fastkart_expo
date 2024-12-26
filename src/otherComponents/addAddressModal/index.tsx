import React, { useState, FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { GlobalStyle } from '../../styles/style';
import { OptionButton, Input } from '../../commonComponents';
import { PickerView } from './components';
import { cityArr, stateArr } from '../../screens/data';
import { useValues } from '../../utils/context';
import { useTheme } from '@react-navigation/native';
import appColors from '../../theme/appColors';

interface AddAddressModalProps {
    showModal: () => void;
    textAlign: string;
}

export const AddAddressModal: FC<AddAddressModalProps> = ({ showModal, textAlign }) => {
    const { colors } = useTheme();
    const { textRtlStyle, t } = useValues();
    const [city, setCity] = useState<string>(t('addAddressModal.city'));
    const [state, setState] = useState<string>(t('addAddressModal.state'));
    const [showState, setShowState] = useState<boolean>(false);
    const [showCity, setShowCity] = useState<boolean>(false);

    const handleCitySelect = (item: { title: string }) => {
        setCity(item.title);
        setShowCity(false);
    };

    const handleStateSelect = (item: { title: string }) => {
        setState(item.title);
        setShowState(false);
    };

    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <View style={styles.container}>
                <Text style={[styles.address, { color: colors.text, textAlign: textRtlStyle }]}>
                    {t('addAddressPage.addAddress')}
                </Text>
                <View style={{ gap: 22 }}>
                    <Input
                        placeholder={t('addAddressModal.street')}
                        style={styles.input}
                    />
                    <Input
                        placeholder={t('addAddressModal.apart')}
                        style={styles.input}
                    />
                </View>
                <PickerView
                    value={city}
                    showValue={showCity}
                    data={cityArr.map((item) => ({
                        title: t(item.title),
                    }))}
                    onPress={() => {
                        setShowCity(!showCity);
                        setShowState(false);
                    }}
                    setInputValue={(selectedItem) => handleCitySelect(selectedItem)}
                    pointerEvents={showState ? 'none' : 'auto'}
                    textAlign={textAlign}
                    color={appColors.white}
                />
                <PickerView
                    value={state}
                    showValue={showState}
                    data={stateArr.map((item) => ({
                        title: t(item.title),
                    }))}
                    onPress={() => {
                        setShowState(!showState);
                        setShowCity(false);
                    }}
                    setInputValue={(selectedItem) => handleStateSelect(selectedItem)}
                    textAlign={textAlign}
                />
                <View style={styles.inputView}>
                    <Input
                        placeholder={t('addAddressModal.zip')}
                        style={styles.input}
                    />
                </View>
                <View style={styles.btnView}>
                    <OptionButton
                        txt1={t('commonText.close')}
                        txt2={t('productDetailsPage.add')}
                        onPress1={showModal}
                        onPress2={showModal}
                    />
                </View>
            </View>
        </View>
    );
}