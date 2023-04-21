import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({ titleText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: 'white',
        fontWeight: 600,
        marginTop: 100


    },
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
})