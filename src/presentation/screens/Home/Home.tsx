import React from 'react'
import { View, Text, Image } from 'react-native';

import Carousel from '../../components/Carousel/Carousel';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import HomeButton from '../../components/Button/HomeButton';

export default function Home() {
    return (
        <View className=' bg-white flex flex-1 w-fit'>
          <View className='grid grid-rows-4 '>
              <View className=' flex-row   mx-5 mt-5'>
                <View className='basis-1/1 mr-5'>
                  <Text className='text-2xl font-bold'>Find Your Doctor</Text>
                  <Text className='text-base mt-1'>Book an appointmant for consultation</Text>
                </View>

                <View className='basis-1/2 m-auto  items-center'>
                  <Image className='h-20 w-16 ' source={require('../../Assets/images/R.jpg')} />
                </View>
              </View>
            </View>
          <HomeButton />
          <Carousel />
        </View>
    )
}