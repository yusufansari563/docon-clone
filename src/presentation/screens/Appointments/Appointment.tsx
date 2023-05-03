import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base'
import { SCREEN_NAME } from '../../Utils';


export default function Appointment() {
    const navigation = useNavigation<{ navigate: any }>();
    
    return (
        <View className='h-full flex justify-center items-center'>
            <Image className='h-28 w-28 mb-4' source={{ uri: 'https://i.postimg.cc/Bb1tFwpd/2696063.png' }} />
            <Text className='text-xl font-bold mb-4'>No Appointments Books</Text>
            <Text className='text-base mb-6'>Please book your first appointment of Video or Physical consultationas per your convenience</Text>
            <Button className='w-32 h-11 bg-blue-600'
            onPress={() => navigation.navigate(SCREEN_NAME.SEARCH)}
            >
                Book Now
                </Button>
        </View>
    )

}

const styles = StyleSheet.create({
})