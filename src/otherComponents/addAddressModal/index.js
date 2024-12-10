import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import { OptionButton, Input } from "../../commonComponents";
import { PickerView } from "./components";
import { useState } from "react";
import { cityArr } from "../../screens/data";
import { stateArr } from "../../screens/data";
import { windowHeight } from "../../theme/appConstant";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

export function AddAddressModal(props) {
    const { colors } = useTheme()
    const { textRtlStyle } = useValues()
    const [city, setCity] = useState('City');
    const [state, setState] = useState('State')
    const [showState, setShowState] = useState(false);
    const [showCity, setShowCity] = useState(false);


    const getCityValue = (item) => {
        setShowCity(!showCity)
        setCity(item)
    }

    const getStateValue = (item) => {
        setShowState(!showState)
        setState(item)
    }



    return (

        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <View style={styles.container}>
                <Text style={[styles.address, { color: colors.text, textAlign: textRtlStyle }]}>Add Address</Text>
                <View style={{ gap: 22 }}>
                    <Input placeholder={'1234 Main St'} style={styles.input} />
                    <Input placeholder={'Apartment,studio, or floor'} style={styles.input} />
                </View>
                <PickerView
                    value={city}
                    showValue={showCity}
                    data={cityArr}
                    onPress={() => {
                        setShowState(false)
                        setShowCity(!showCity)
                    }}
                    setInputValue={getCityValue}
                    pointerEvents={showState ? 'none' : null}
                    textAlign={props.textAlign}
                />
                <PickerView
                    value={state}
                    showValue={showState}
                    data={stateArr}
                    onPress={() => {
                        setShowCity(false)
                        setShowState(!showState)
                    }}
                    setInputValue={getStateValue}
                    textAlign={props.textAlign}
                />
                <View style={styles.inputView}>
                    <Input placeholder={'Zip'} style={styles.input} />
                </View>
                <View style={styles.btnView}>
                    <OptionButton txt1={'Close'} txt2={'Add'} onPress1={props.showModal} onPress2={props.showModal} />
                </View>
            </View>
        </View>
    )
}