import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CarouselText from './CarouselText'
import { Image } from 'react-native';

import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window')

export default function CarouselSlides() {
    const [data, setData] = useState(CarouselItem)
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        // className='bg-gray-200'
        <View>  
            <View className='m-2'>
                <CarouselText />
            </View>
            <View>
                <FlatList
                    data={CarouselItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex(parseInt((x / 256).toFixed(0)));
                    }}
                    renderItem={({ item }) => (
                        <View>
                            <View className='mx-2 mb-6 '>
                                <View className='ml-2 h-80 w-64 border border-blue-300  rounded-xl bg-white'>
                                    <View className=' flex justify-center items-center m-1'>
                                        <Image source={{ uri: item.image }} className='h-40 w-full rounde' />
                                    </View>
                                    <View className='mx-2'>
                                        <Text className='text-base font-semibold text-slate-400 mb-1'>{item.step}</Text>
                                        <Text className='text-lg font-bold'>{item.descbold}</Text>
                                        <Text className='text-base'>{item.desc}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />

                {/* -------------------indicator------------------  */}
                <View  className='flex-row justify-center items-center'
                style={styles.indicatorContainer}>
                    {
                        data.map((item, index) => {
                            return (
                                <View className='w-12 h-1 rounded ml-1'
                                    style={{backgroundColor: currentIndex == index ? '#3bb0de' : 'lightgray'}}>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    indicatorContainer: {
        width: width,
    },
})