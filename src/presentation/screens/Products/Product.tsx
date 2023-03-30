import React from 'react';
import { DATA_STATE } from '../../../Domain/Service/Utils/dataState';
import Loader from './../../components/Loader/Loader';
import { View, Text, FlatList } from 'react-native';

export default function Product() {
  switch (DATA_STATE.INITIALIZED) {
    case DATA_STATE.FETCHING:
      return <Loader />;
    case DATA_STATE.INITIALIZED:
      return (
        <View className='bg-slate-200 flex flex-1 w-fit'>
          <View className='grid grid-rows-4'>
            <Text>Product</Text>
          </View>
        </View>
      );
    default:
      return <Loader />;
  }
}
