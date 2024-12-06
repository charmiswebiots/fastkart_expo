import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import { notification } from '../../../data';
import { useTheme } from '@react-navigation/native';


export function NotificationsView() {
    const {colors}=useTheme()
    return (
        <FlatList
            data={notification}
            contentContainerStyle={styles.list}
            renderItem={({ item }) =>
                <View style={styles.dataView}>
                    <Text style={styles.day}>{item.day}</Text>
                    {item.value.map((data, index) =>
                        <View key={index} style={styles.value}>
                           <View
                                style={[
                                    styles.icon,
                                    {
                                        backgroundColor: data.color || appColors.defaultBackground, 
                                    }
                                ]}
                            >
                                {data.icon}
                            </View>
                            <View style={styles.titleView}>
                                <View style={styles.offerLeft}>
                                    <Text style={[styles.title,{color:colors.text}]}>{data.title}</Text>
                                    <Text style={styles.subTxt}>{data.subtxt}</Text>
                                </View>
                                <Text style={styles.tag}>{data.tag}</Text>
                            </View>
                        </View>
                    )}
                </View>
            }
        />
    );
}
