import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CarouselText from './CarouselText'
import { Image } from 'react-native';


export default function CarouselSlides() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, SetData] = useState(
        [
            {
                id: '1',
                step: "STEP 1/4",
                title: 'First Item',
                descbold: "Search and select your doctor",
                desc: "with their name and Docon Id",
                image: "https://i.postimg.cc/8PmG8SzX/doctor.webp",
            },
            {
                id: '2',
                step: "STEP 2/4",
                title: 'Second Item',
                descbold: "Select consultation time slot",
                desc: "for you or your family as per convenience",
                image: 'https://i.postimg.cc/L8J6qP71/timeslot.jpg',
            },
            {
                id: '3',
                step: "STEP 3/4",
                title: 'Third Item',
                descbold: "Pay consultation fee",
                desc: "to confirm the appointment and the doctor will call you on schedule time",
                image: 'https://i.postimg.cc/5yrTDXmh/payfee.jpg',
            },
            {
                id: '4',
                step: "STEP 4/4",
                title: 'Third Item',
                descbold: "Download the prescription",
                desc: "after consultation is complete",
                image: 'https://i.postimg.cc/8CWw311j/rx-prescription-form-clipboard-pad-laptop-online-clinic-concept-106788-2335.webp',
            },
        ]
    );

    return (
        <View>
            <View className='m-2'>
                <CarouselText />
            </View>
            <View>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex(x/100);
                    }}
                    renderItem={({ item }) => (
                        <View>
                            <View className='m-2 '>
                                <View className='ml-2 h-80 w-64 border border-blue-300  rounded-xl'>
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
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                {
                    data.map((item, index) => {
                        return (
                            <View style={{ 
                                width: 8, 
                                height: 8, 
                                borderRadius: 4, 
                                backgroundColor: currentIndex==index? 'blue' : 'gray', 
                                marginLeft: 5 }}>

                            </View>
                        )
                    })
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({})