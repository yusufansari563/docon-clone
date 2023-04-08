import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarouselText from './CarouselText'
import CarouselSlides from './CarouselSlides'

export default function Carousel() {
  return (
    <View>
        <CarouselText />
        <CarouselSlides />
    </View>
  )
}

const styles = StyleSheet.create({})