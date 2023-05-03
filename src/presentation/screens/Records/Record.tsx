import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from 'native-base'

export default function Record() {

    return (
        <View className='h-full flex items-center justify-center'>
            <Image className=' h-20 w-20 mb-4 ' source={require('../../Assets/images/FolderAdd.png')} />
            <Text className='text-xl font-bold mb-4'>No Patient History</Text>
            <Text className='text-base mb-6'>Please book your first appointment of Video or Physical consultationas per your convenience</Text>
            <Button className='w-32 h-11 bg-blue-600 '>Book Now</Button>
        </View>
    )

}