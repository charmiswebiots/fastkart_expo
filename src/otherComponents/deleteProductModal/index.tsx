




import React, { FC } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { OptionButton } from "../../commonComponents";
import { useValues } from "../../utils/context";

interface DeleteProductModalProps {
    onPress: () => void;
}

export const DeleteProductModal: FC<DeleteProductModalProps> = (props) => {
    const { t } = useValues();
    return (
        <View style={[styles.mainView]}>
            <Text style={[styles.sure]}>{t('deleteProductModal.areYouSure')}</Text>
            <Text style={styles.txt}>{t('deleteProductModal.txt')}</Text>
            <OptionButton
                txt1={'commonText.close'}
                txt2={'deleteProductModal.remove'}
                onPress1={props.onPress}
                onPress2={props.onPress}
            />
        </View>
    );
}