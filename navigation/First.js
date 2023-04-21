import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home';
import Quiz from '../screen/Quiz';
import Result from '../screen/Result';

const Stack = createNativeStackNavigator();

const First = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default First

const styles = StyleSheet.create({})