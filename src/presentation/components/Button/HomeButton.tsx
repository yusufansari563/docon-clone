import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../Utils';


export default function HomeButton() {
    const navigation = useNavigation<{ navigate: any }>();
    return (
        <Pressable className='flex-row w-11/12 h-11 ml-3.5 border-2 rounded border-blue-200'
            onPress={() => navigation.navigate(SCREEN_NAME.SEARCH)}
        >
            <View className='ml-2 mt-1.5'>
                <AntDesign name={'search1'} size={25} />
            </View>
            <View className='justify-center items-center' >
                <Text className='text-base font-normal ml-2.5'>Search by your doctor's name or Docon ID</Text>
            </View>
        </Pressable>
    )
}


