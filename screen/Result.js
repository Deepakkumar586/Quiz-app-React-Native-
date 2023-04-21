import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Result = ({ navigation, route }) => {
    const { score } = route.params;

    const result = (score > 30 ? 'https://cdni.iconscout.com/illustration/premium/thumb/victory-concept-3300633-2764330.png'

        : 'https://cdni.iconscout.com/illustration/premium/thumb/startup-failure-2357832-2016259.png')


    return (
        <View style={styles.container}>
            <Title titleText="Result" />
            <Text
                style={{
                    color: 'green',
                    fontSize: 29,
                    fontWeight: 600,
                    alignSelf: 'center',
                }}>
                {score}
            </Text>

            <View style={styles.bannerContainer}>
                <Image source={{ result }} style={styles.banner} />

            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.btn}>
                {/* <Text style={styles.btnText} >Home</Text> */}
                <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    banner: {
        height: 400,
        width: 400,
    },
    bannerContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,



    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'black'


    },
    btn: {
        width: '100%',
        color: 'black',

        backgroundColor: '#af1d3c',
        padding: 15,
        borderRadius: 19,
        marginBottom: 30,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
    },
});
