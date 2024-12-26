





import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState, FC } from 'react';
import styles from './styles';
import { useValues } from '../../../../utils/context';

interface DatePickerViewProps {
    showDatePicker: boolean;
    onCancel: () => void;
    onConfirm: (confirmed: boolean, formattedDate: string) => void;
}

interface DateState {
    day: number;
    month: number;
    year: number;
}

export const DatePickerView: FC<DatePickerViewProps> = ({ showDatePicker, onCancel, onConfirm }) => {
    const { t } = useValues();
    const [date, setDate] = useState<DateState>({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });
    const { viewRtlStyle } = useValues();
    const days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
    const months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
    const years: number[] = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);

    const handleConfirm = (): void => {
        const { day, month, year } = date;
        const formattedDate: string = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        onConfirm(true, formattedDate);
        onCancel();
    };

    const renderOptions = (options: number[], onSelect: (value: number) => void, selectedValue: number): JSX.Element => (
        <ScrollView style={styles.scrollPicker} showsVerticalScrollIndicator={false}>
            {options.map((value: number) => (
                <TouchableOpacity
                    key={value}
                    style={[
                        styles.option,
                        selectedValue === value && styles.selectedOption,
                    ]}
                    onPress={() => onSelect(value)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selectedValue === value && styles.selectedOptionText,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    return (
        <Modal visible={showDatePicker} transparent={true} animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.headerText}>{t('commonText.selectDate')}</Text>
                    <View style={[styles.pickerContainer, { flexDirection: viewRtlStyle }]}>
                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>{t('commonText.day')}</Text>
                            {renderOptions(days, (value: number) =>
                                setDate((prev: DateState) => ({ ...prev, day: value })), date.day)}
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>{t('commonText.month')}</Text>
                            {renderOptions(months, (value: number) =>
                                setDate((prev: DateState) => ({ ...prev, month: value })), date.month)}
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>{t('commonText.year')}</Text>
                            {renderOptions(years, (value: number) =>
                                setDate((prev: DateState) => ({ ...prev, year: value })), date.year)}
                        </View>
                    </View>

                    <View style={[styles.buttonContainer, { flexDirection: viewRtlStyle }]}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>{t('commonText.cancle')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.buttonText}>{t('commonText.confirm')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}