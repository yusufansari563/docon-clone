import React from "react";
import { VStack, Input, Icon, NativeBaseProvider, Center } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

function SearchBar() {

    return (
        <View className="">
            <VStack w="360" space={5} alignSelf="center" className="  border-solid border-4 border-blue-100 rounded-md mr-4"
            >
                <Input placeholder="Search by your doctor's name or Docon ID" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
            </VStack>
        </View>
    )
}

function Example() {
    return <Center  >
        <SearchBar />
    </Center>;
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center >
                <Example />
            </Center>
        </NativeBaseProvider>
    );
};
