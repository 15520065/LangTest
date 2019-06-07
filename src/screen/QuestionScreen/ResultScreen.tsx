import * as React from 'react'
import {View, Text, Button} from 'native-base';
import {StyleSheet, ViewStyle, AsyncStorage} from 'react-native';
import * as Progress from 'react-native-progress';
import {heightPercentageToDP, widthPercentageToDP} from '../../helper/ratioHelper';
import {systemWeights, human} from 'react-native-typography';
import {NavigationScreenProps, NavigationParams} from 'react-navigation';
import {Rating, AirbnbRating} from 'react-native-ratings';

export interface ResultScreenProps extends NavigationScreenProps<NavigationParams, any> {
    totalAnswer: number,
    correctAnswer: number,
    uncorrectedAnswer: number,
    leftButtonText: string,
    leftButtonClick?: () => void,
    rightButtonText: string,
    rightButtonClick?: () => void,
    star: number,
    onResultScreenOpen?: (correctAnswer: number, totalAnswer: number) => void,
}

interface ResultScreenState {
    progress: number
}


class ResultScreen extends React.Component<ResultScreenProps, ResultScreenState> {
    static defaultProps: ResultScreenProps = {
        totalAnswer: 10,
        correctAnswer: 10,
        uncorrectedAnswer: 0,
        star: 5,
        leftButtonText: "Click me",
        rightButtonText: "Home",
        navigation: null
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    constructor(props: ResultScreenProps) {
        super(props);

        const correctedAnswer: number = this.props.navigation.getParam('correctedAnswer', props.correctAnswer);
        if (correctedAnswer === 0) {
            this.state = {
                progress: 1
            }
        } else {
            this.state = {
                progress: 0
            }
        }
    }

    showStart() {
        const correctedAnswer: number = this.props.navigation.getParam('correctedAnswer', this.props.correctAnswer);
        const totalAnswer: number = this.props.navigation.getParam('totalAnswer', this.props.correctAnswer);
        if (correctedAnswer / totalAnswer <= 0.2) {
            return 1;
        } else if (correctedAnswer / totalAnswer > 0.2 && correctedAnswer / totalAnswer <= 0.4) {
            return 2;
        } else if (correctedAnswer / totalAnswer > 0.4 && correctedAnswer / totalAnswer <= 0.6) {
            return 3;
        } else if (correctedAnswer / totalAnswer > 0.6 && correctedAnswer / totalAnswer <= 0.8) {
            return 4;
        } else if (correctedAnswer / totalAnswer > 0.8 && correctedAnswer / totalAnswer <= 1) {
            return 5;
        }
        return 0;
    }

    componentDidMount() {
        const onResultScreenOpen: (correctAnswer: number, totalAnswer: number) => void = this.props.navigation.getParam('onResultScreenOpen', this.props.onResultScreenOpen);
        const correctedAnswer: number = this.props.navigation.getParam('correctedAnswer', this.props.correctAnswer);
        const totalAnswer: number = this.props.navigation.getParam('totalAnswer', this.props.correctAnswer);
        this.setState({
            progress: correctedAnswer / totalAnswer
        })
        if (onResultScreenOpen) {
            onResultScreenOpen(correctedAnswer, totalAnswer);
        }
    }

    render() {
        const correctedAnswer: number = this.props.navigation.getParam('correctedAnswer', this.props.correctAnswer);
        const uncorrectedAnswer: number = this.props.navigation.getParam('uncorrectedAnswer', this.props.correctAnswer);
        const totalAnswer: number = this.props.navigation.getParam('totalAnswer', this.props.correctAnswer);
        const leftButtonText: number = this.props.navigation.getParam('leftButtonText', this.props.leftButtonText);
        const leftButtonClick: () => void = this.props.navigation.getParam('leftButtonClick', this.props.leftButtonClick);
        const rightButtonText: number = this.props.navigation.getParam('rightButtonText', this.props.rightButtonText);
        const rightButtonClick: () => void = this.props.navigation.getParam('rightButtonClick', this.props.rightButtonClick);


        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={[human.largeTitle, {textAlign: 'center'}]}>Your result</Text>
                </View>

                <View style={{paddingVertical: 10}}>
                    {/*<AirbnbRating*/}
                    {/*    count={5}*/}
                    {/*    reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}*/}
                    {/*    defaultRating={1}*/}
                    {/*    size={40}*/}
                    {/*/>*/}
                    <Rating
                        showRating
                        startingValue={this.showStart()}
                        onFinishRating={this.ratingCompleted}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.colorContainer}>
                        <View style={styles.textContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelLeftText}>TOTAL QUESTION</Text>
                                <Text style={styles.labelLeftText}>CORRECT ANSWER</Text>
                                <Text style={styles.labelLeftText}>WRONG ANSWER</Text>
                            </View>
                            <View style={styles.numberContainer}>
                                <Text style={styles.numberText}>{totalAnswer}</Text>
                                <Text style={[styles.numberText, {color: '#46C00D'}]}>{correctedAnswer}</Text>
                                <Text style={[styles.numberText, {color: '#EF2121'}]}>{uncorrectedAnswer}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={leftButtonClick}
                            style={[styles.button as ViewStyle, {backgroundColor: '#FF5252'}]}>
                        <Text>{leftButtonText}</Text>
                    </Button>
                    <Button info bordered onPress={rightButtonClick}
                            style={[styles.button as ViewStyle, {borderWidth: 3}]}>
                        <Text style={{textAlign: "center"}}>{rightButtonText}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        zIndex: -3
    },
    progress: {
        alignContent: 'center'
    },
    colorContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        height: heightPercentageToDP(40),
        backgroundColor: '#019AE8',
    },
    textContainer: {
        marginTop: heightPercentageToDP(16),
        marginLeft: widthPercentageToDP(8),
        marginRight: widthPercentageToDP(8),
        marginBottom: heightPercentageToDP(5),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    labelContainer: {
        flex: 2,
        marginLeft: widthPercentageToDP(8),
        marginTop: heightPercentageToDP(4),
        marginBottom: heightPercentageToDP(4),
        justifyContent: 'space-between'
    },
    labelLeftText: {
        fontSize: 15,
        textAlign: 'left',
        ...systemWeights.semibold
    },
    numberText: {
        fontSize: 15,
        textAlign: 'right',
        ...systemWeights.semibold
    },
    numberContainer: {
        flex: 1,
        marginRight: widthPercentageToDP(8),
        marginTop: heightPercentageToDP(4),
        marginBottom: heightPercentageToDP(4),
        alignContent: 'flex-end',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        marginTop: heightPercentageToDP(2),
        marginLeft: widthPercentageToDP(8),
        marginRight: widthPercentageToDP(8),
        marginBottom: heightPercentageToDP(2),
        height: heightPercentageToDP(7),
        maxHeight: heightPercentageToDP(7),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 10,
        width: widthPercentageToDP(37),
        justifyContent: 'center',
    }


})
export default ResultScreen;