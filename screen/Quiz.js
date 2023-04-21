import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'


const Quiz = ({ navigation }) => {
    // for All question
    const [questions, setQuestions] = useState();
    // which question render 
    const [ques, setques] = useState(0)
    // shuffle array state use
    const [options, setOptions] = useState([]);
    // for result score
    const [score, setScore] = useState(0)

    const [loading, setLoading] = useState(false);


    //shuffle array use for options
    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // shuffle option generate
    function generateOptionShuffle(_question) {
        const outputOption = [..._question.incorrect_answers]
        outputOption.push(_question.correct_answer)
        shuffleArray(outputOption)
        return outputOption
    }

    // handle selected questions 

    function selectedOption(_option) {
        if (_option === questions[ques].correct_answer) {
            setScore(score + 10)
        }
        if (ques !== 9) {
            setques(ques + 1)
            setOptions(generateOptionShuffle(questions[ques + 1]))
        }
        if (ques === 9) {
            handleShowResult()

        }
    }





    const getQuiz = async () => {
        setLoading(true);
        const url = "https://opentdb.com/api.php?amount=10&category=26&difficulty=medium&type=multiple&encode=url3986";
        const res = await fetch(url);
        const data = await res.json();
        // console.warn(output.results)
        setQuestions(data.results)
        setOptions(generateOptionShuffle(data.results[0]))

        setLoading(false);


    }

    useEffect(() => {
        getQuiz();


    }, [])


    // next question way
    function nextWay() {
        setques(ques + 1)
        setOptions(generateOptionShuffle(questions[ques + 1]))
    }


    // our result show navigate
    function handleShowResult() {
        navigation.navigate('Result', {
            score: score
        })
    }


    return (

        <View style={styles.container}>

            {/* inside qusetion data pada huaa */}
            {loading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100%" }}>
                <Text style={{ fontSize: 30, alignItems: 'center', alignSelf: 'center', color: 'black', fontWeight: 800 }}>Loading.....</Text>
            </View> : questions &&
            <View style={styles.parent} >

                <View style={styles.top}>
                    <Text style={styles.question}>Q.{decodeURIComponent(questions[ques].question)}</Text>

                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.optionButton} onPress={() => selectedOption(options[0])}>
                        <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => selectedOption(options[1])}>
                        <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => selectedOption(options[2])}>
                        <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={() => selectedOption(options[3])}>
                        <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bottom}>
                    {/* <TouchableOpacity style={styles.button} >
                            <Text style={styles.buttonText}>Previous</Text>
                        </TouchableOpacity> */}
                    {
                        ques !== 9 && <TouchableOpacity style={styles.button} onPress={nextWay}>
                            <Text style={styles.buttonText} >Next</Text>
                        </TouchableOpacity>
                    }

                    {/* show result  */}

                    {
                        ques === 9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                            <Text style={styles.buttonText} >Show Result</Text>
                        </TouchableOpacity>
                    }


                    {/* End button is optional we are use to last time */}

                    {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>End</Text>
                </TouchableOpacity> */}


                </View>
            </View>
            }


        </View >
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {

        height: '100%',
        backgroundColor: '#b23a48'
    },
    top: {
        marginVertical: 16,

    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: 'row'

    },
    button: {

        color: 'black',

        backgroundColor: '#ff9f1c',
        padding: 12,
        paddingHorizontal: 25,
        borderRadius: 19,
        marginBottom: 30,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 30,
        color: "white",
        fontWeight: 800,
    },
    option:
    {
        fontSize: 18,
        color: 'black',
        fontWeight: 600,
        color: 'black'

    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "white",
        paddingHorizontal: 12,
        borderRadius: 15,
    },
    parent: {
        height: "100%"
    }


})