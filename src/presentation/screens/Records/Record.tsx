import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../../Utils';

export default function Record() {
    const navigation = useNavigation<{ navigate: any }>();

    return (
        <View className='h-full flex items-center justify-center'>
            <Image className=' h-20 w-20 mb-4 ' source={require('../../Assets/images/FolderAdd.png')} />
            <Text className='text-xl font-bold mb-4'>No Patient History</Text>
            <Text className='text-base mb-6'>Please book your first appointment of Video or Physical consultationas per your convenience</Text>
            <Button className='w-32 h-11 bg-blue-600'
                onPress={() => navigation.navigate(SCREEN_NAME.SEARCH)}>
                Book Now
            </Button>
        </View>
    )

}