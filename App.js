import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './screen/Home'
import Quiz from './screen/Quiz'
import Result from './screen/Result'
import { NavigationContainer } from '@react-navigation/native'
import First from './navigation/First'


export default function App() {
  return (

    <NavigationContainer>
      <First />
      {/* <Result /> */}
    </NavigationContainer>


  )
}
const styles = StyleSheet.create({

})


