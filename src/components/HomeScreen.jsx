import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import CardC from './CardC'

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
        <CardC></CardC>
      <BottomNav></BottomNav>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})