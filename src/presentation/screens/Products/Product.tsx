import React from 'react';
import { DATA_STATE } from '../../../Domain/Service/Utils/dataState';
import Loader from './../../components/Loader/Loader';
import { View, Text, Image } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';



export default function Product() {
  switch (DATA_STATE.INITIALIZED) {
    case DATA_STATE.FETCHING:
      return <Loader />;
    case DATA_STATE.INITIALIZED:
      return (
        <View className=' bg-white flex flex-1 w-fit'>
          <View className='h-24 mb-0 grid grid-rows-4'>
            <View className='  h-28 w-full mx-4 my-4  flex-row'>
              <View className='mt-3'>
                <Text className='text-xl font-bold'>Find Your Doctor</Text>
                <Text className='text-base mt-1'>Book an appointmant for consultation</Text>
              </View>
              <View className='ml-7'>
                <Image className='h-20 w-16' source={require('../../Assets/images/R.jpg')} />
              </View>
            </View>
          </View>
          <SearchBar  />
        </View>
      );
    default:
      return <Loader />;
  }
}

