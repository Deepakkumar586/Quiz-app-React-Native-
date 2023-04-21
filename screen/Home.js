import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, backgroundColor } from 'react-native';
import React from 'react';
import Title from '../components/Title';



const Home = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Title titleText='Quiz Start' />
            <View>
                <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 70, alignItems: "center", justifyContent: 'center', textAlign: 'center' }}>Join our Daily challenge and win special gift just for you........</Text>
            </View>
            <View style={styles.bannerContainer}>
                {/* <Image
                        // source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/quiz-timer-7981296-6382469.png" }}


                        style={styles.banner}
                        resizeMode='contain'
                    /> */}
            </View>

            < TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.btnText} >Start</Text>
            </TouchableOpacity>
        </View >

    );
};

export default Home;

const styles = StyleSheet.create({
    banner: {
        height: 400,
        width: 400,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container: {
        // paddingTop: 40,
        // paddingHorizontal: 20
        height: '100%',
        backgroundColor: "#b23a48"

    },
    btn: {
        width: '100%',
        color: 'white',

        backgroundColor: '#ff9f1c',
        padding: 15,
        borderRadius: 19,
        marginBottom: 30,
        alignItems: 'center',



    },
    btnText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white',
    }







});
