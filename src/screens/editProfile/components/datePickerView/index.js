import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export function DatePickerView({ showDatePicker, onCancel, onConfirm }) {
    const [date, setDate] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    });

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);

    const handleConfirm = () => {
        const { day, month, year } = date;
        const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        onConfirm(true, formattedDate); 
        onCancel(); 
    };

    const renderOptions = (options, onSelect, selectedValue) => (
        <ScrollView style={styles.scrollPicker} showsVerticalScrollIndicator={false}>
            {options.map((value) => (
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
                    <Text style={styles.headerText}>Select Date</Text>
                    <View style={styles.pickerContainer}>
                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>Day</Text>
                            {renderOptions(days, (value) =>
                                setDate((prev) => ({ ...prev, day: value })), date.day)}
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>Month</Text>
                            {renderOptions(months, (value) =>
                                setDate((prev) => ({ ...prev, month: value })), date.month)}
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.pickerLabel}>Year</Text>
                            {renderOptions(years, (value) =>
                                setDate((prev) => ({ ...prev, year: value })), date.year)}
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
