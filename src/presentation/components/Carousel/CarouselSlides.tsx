import React from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
} from 'react-native';

const DATA = [
    {
        id: '1',
        step: "STEP 1/4",
        title: 'First Item',
        image: "https://i.postimg.cc/9fS9RVJW/doctor.png",
    },
    {
        id: '2',
        step: "STEP 2/4",
        title: 'Second Item',
        image: 'https://i.postimg.cc/L8J6qP71/timeslot.jpg',
    },
    {
        id: '3',
        step: "STEP 3/4",
        title: 'Third Item',
        image: 'https://i.postimg.cc/5yrTDXmh/payfee.jpg',
    },
    {
        id: '4',
        step: "STEP 4/4",
        title: 'Third Item',
        image: 'https://i.postimg.cc/2S0ctb82/prescri.jpg',
    },
];

// interface CarouselItem {
//     id: string;
//     title: string;
//     image: string;
//     step: string;

// }


const App = () => {
    return (
        <View>
            <FlatList className=' h-96 w-full mb-5'
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <>
                        <View className=' mx-2 snap-x '>
                            <View className='m-2 h-4/5 w-72 bg-yellow-200 '>
                                <View className='bg-red-300 flex justify-center items-center'>
                                    <Image source={{ uri: item.image }} className='h-40 w-40 rounde' />
                                </View>
                                <Text className='text-lg font-bold text-slate-400'>{item.step}</Text>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    </>

                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};



export default App;