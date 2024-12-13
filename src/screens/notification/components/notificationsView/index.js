import React from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import { notification } from '../../../data';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../../../utils/context';


export function NotificationsView() {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle,t}=useValues()
    return (
        <FlatList
            data={notification}
            contentContainerStyle={styles.list}
            renderItem={({ item }) =>
                <View style={styles.dataView}>
                    <Text style={[styles.day,{textAlign:textRtlStyle}]}>{item.day}</Text>
                    {item.value.map((data, index) =>
                        <View key={index} style={[styles.value,{flexDirection:viewRtlStyle}]}>
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
                            <View style={[styles.titleView,{flexDirection:viewRtlStyle}]}>
                                <View style={styles.offerLeft}>
                                    <Text style={[styles.title,{color:colors.text},{textAlign:textRtlStyle}]}>{t(data.title)}</Text>
                                    <Text style={[styles.subTxt,{textAlign:textRtlStyle}]}>{t(data.subtxt)}</Text>
                                </View>
                                <Text style={styles.tag}>{t(data.tag)}</Text>
                            </View>
                        </View>
                    )}
                </View>
            }
        />
    );
}
