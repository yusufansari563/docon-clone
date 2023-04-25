import {Animated, DatePickerIOSComponent, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {Input} from 'native-base';

export default function Settings() {
    const [chosenDate, setChosenDate] = useState(new Date());
    return (
        <ScrollView>
            <View className="p-5">
                <Text className={"text-gray-500 pt-2"}>Mobile Number </Text>
                <Text className={"font-bold pt-1"}>1234567890</Text>
                <View className={"pt-3 grid grid-rows-2"}>
                    <View className={"w-auto"}>
                        <Text className={"pb-2"}>First Name
                            <Text className={"text-red-600 pl-2"}>
                                *</Text>
                        </Text>
                        <Input borderRadius={"15"} size="md" placeholder="md Input"/>
                    </View>

                    <View className={"w-auto"}>
                        <Text className={"pb-2"}>First Name
                            <Text className={"text-red-600 pl-2"}>
                                *</Text>
                        </Text>
                        <Input borderRadius={"15"} size="md" placeholder="md Input"/>
                    </View>
                </View>

                <View className={"pt-3 grid grid-rows-2"}>
                    <View className={"w-auto"}>
                        <Text className={"pb-2"}>First Name
                            <Text className={"text-red-600 pl-2"}>
                                *</Text>
                            <DatePickerIOSComponent date={chosenDate} onDateChange={setChosenDate}/>
                        </Text>

                    </View>

                    <View className={"w-auto"}>
                        <Text className={"pb-2"}>First Name
                            <Text className={"text-red-600 pl-2"}>
                                *</Text>
                        </Text>
                        <Input borderRadius={"15"} size="md" placeholder="md Input"/>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}