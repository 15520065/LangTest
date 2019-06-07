import React from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title, View,} from 'native-base';

import {
    Alert,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import sharedQuizService from '../../services/QuizService';
import {withNavigation} from 'react-navigation';
import {QuestionType} from '../../entity/Question';
import LocalHelper from '../../helper/LocalHelper';
import GridView from "react-native-super-grid";
import DataHelper from "../../helper/DataHelper";


import FlatButton from 'react-native-flat-button'
import {heightPercentageToDP, widthPercentageToDP} from "../../helper/ratioHelper";

class SampleScreen extends React.Component {
    topic = null;
    topicData = null;

    static navigationOptions = {
        header: null // !!! Hide Header
    };

    constructor(props) {
        super(props);
        this.state = {};

        // this.topic = props.navigation.getParam('topic', null);
        this.topic = {
            id: 2,
            name: 'Sample 1'
        };
    }

    _openStep = (index, name) => {
        // Toast.show('This is a long toast.', Toast.LONG);
        const {navigation} = this.props;

        navigation.navigate('StepScreen', {
            name: name,
            index: index
        });
    };

    _testAll = () => {
        const {navigation} = this.props;

        sharedQuizService.initTest(QuestionType.part1, 5, 3, 5 * 60 * 1000);
        navigation.navigate('QuizScreen');
    };

    //region ------------- TEST SCREEN

    _wordDataToTestData = (wordData) => {
        const questionArr = [];
        for (let curWordIndex = 0; curWordIndex < wordData.length; curWordIndex++) {

            const correctAnswerNum = Math.floor(Math.random() * 4);
            let correctWord = wordData[curWordIndex];

            // Random answer array
            const answerArrIndex = [];
            while (answerArrIndex.length <= 3) {
                const answerIndex = Math.floor(Math.random() * wordData.length);

                let isAdded = false;
                for (const answerIndexGetted of answerArrIndex) {
                    if ((answerIndex === answerIndexGetted)) {
                        isAdded = true;
                        break;
                    }
                }
                if (answerIndex === curWordIndex) {
                    isAdded = true;
                }

                if (!isAdded) {
                    answerArrIndex.push(answerIndex);
                }
            }

            // put Answer and Correct answer into one Array
            const answerArr = [];
            for (let i = 0, j = 0; i < 4; i++) {
                if (i === correctAnswerNum) {
                    answerArr.push(correctWord.translate);
                } else {
                    answerArr.push(wordData[answerArrIndex[j]].translate);
                    j++;
                }
            }

            //push question to array
            const question = {
                id: correctWord.id,
                type: QuestionType.vocabulary,
                question: correctWord.word,
                answer: answerArr,
                correctAnswer: correctAnswerNum,
                imageAsset: correctWord.img,
                explain: 'Nothing at all',
                help: correctWord.ex,
                difficultLevel: 3,
                comeWith: [correctWord.id]
            };
            questionArr.push(
                question
            );
        }
        return questionArr;
    };

    _openTestVocabularyScreen = () => {
        if (this.topicData.length <= 4) {
            Alert.alert(
                'Alert',
                'Not enough data to run test!',
            );
        } else {
            sharedQuizService.initTestVocabulary(this._wordDataToTestData(this.topicData));
            this.props.navigation.navigate('Questions'
                , {
                    'quizOver': this.quizOver
                }
            );
        }
    };

    _onResultScreenOpen = (correctAnswer, totalAnswer) => {
        this._storeVocabularyResult(correctAnswer, totalAnswer);
    };


    _storeVocabularyResult = async (correctAnswer, totalAnswer) => {
        const result = correctAnswer / totalAnswer;
        let topicResultMap = await LocalHelper._getMapData(LocalHelper.topicResult);
        if (topicResultMap == null) {
            topicResultMap = new Map();
        }
        topicResultMap.set(this.topic.id, result);

        // calculate user score
        let score = await LocalHelper._getMapData(LocalHelper.score);
        if (score == null) {
            score = new Map();
            score.set('totalAnswer', totalAnswer);
            score.set('correctAnswer', correctAnswer);
        } else {
            score.set('totalAnswer', totalAnswer + score.get('totalAnswer'));
            score.set('correctAnswer', correctAnswer + score.get('correctAnswer'));
        }

        LocalHelper._storeMapData(LocalHelper.topicResult, topicResultMap);
        LocalHelper._storeMapData(LocalHelper.score, score);
    };

    quizOver = (quizStore) => {
        this.props.navigation.popToTop();
        const navigation = this.props.navigation;
        const tryAgainButton = async () => {
            this._openTestVocabularyScreen();
        };
        const homeFunc = async () => {
            this.props.navigation.navigate('Word',
                {
                    topic: this.topic
                });
        };
        navigation.navigate('Results', {
            totalAnswer: quizStore.getTotalQuestionNumber(),
            correctedAnswer: quizStore.state.correctedAnswer,
            uncorrectedAnswer: quizStore.state.uncorrectedAnswer,
            leftButtonText: 'LET DO AGAIN',
            leftButtonClick: tryAgainButton,
            rightButtonText: 'Go Back',
            rightButtonClick: homeFunc,
            onResultScreenOpen: this._onResultScreenOpen,
        });
    };

    //endregion

    render() {
        const items = [
            {
                name: 'Step 1',
                code: DataHelper._getPercent(1),
                icon: require('../../../assets/images/home/bg/bgs6.png'),
                iconText: require('../../../assets/images/home/text/step1-2.png')
            },
            {
                name: 'Step 2',
                code: DataHelper._getPercent(2),
                icon: require('../../../assets/images/home/bg/bgs4.png'),
                iconText: require('../../../assets/images/home/text/step2-2.png')
            },
        ];

        return (
            <Container style={styles.container}>
                <Header androidStatusBarColor="#0076BF"
                        style={{backgroundColor: Platform.OS === 'android' ? '#019AE8' : '#FFFFFF'}}>
                    <Left>
                        {Platform.OS === 'ios'
                            ?
                            <Button transparent onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <Text>{'<Back'}</Text>
                            </Button>
                            :
                            <Button transparent onPress={() => {
                                this.props.navigation.goBack();
                            }}>
                                <Icon name='nothing' android='md-arrow-back' ios='ios-arrow-back'/>
                            </Button>
                        }
                    </Left>
                    <Body>
                    <Title>{this.topic.name}</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content
                    contentContainerStyle={{flexGrow: 1}}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <ScrollView style={{flex: 1}}>
                            <GridView
                                itemDimension={180}
                                items={items}
                                style={sampleStyles.gridView}
                                renderItem={(item, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this._openStep(index, item.name);
                                        }}
                                        style={[
                                            sampleStyles.viewContainer,
                                            {
                                                marginTop: 10,
                                                backgroundColor: '#ffffff',
                                                shadowOffset: {width: 1, height: 2},
                                                shadowOpacity: 0.12,
                                                shadowRadius: 4,
                                                elevation: 1,
                                            }
                                        ]}>
                                        <ImageBackground source={item.icon}
                                                         resizeMode= 'stretch'
                                                         style={[
                                                             sampleStyles.viewContainer,
                                                             {resizeMode: 'stretch', width: '100%', height: '100%'}
                                                         ]}
                                                         imageStyle={{
                                                             borderRadius: 10,
                                                             height: 150,
                                                             flex: 1
                                                         }}
                                        >
                                            <View style={sampleStyles.itemContainer}>
                                                {/*<Text style={{*/}
                                                {/*fontSize: 16,*/}
                                                {/*color: '#5B5B5B',*/}
                                                {/*fontWeight: '600',*/}
                                                {/*fontStyle: 'italic'*/}
                                                {/*}}>{item.name}</Text>*/}
                                                <Image
                                                    style={{
                                                        resizeMode: 'contain', width: '58%', height: '58%'
                                                    }}
                                                    source={item.iconText}
                                                />
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                )}
                            />
                        </ScrollView>

                        <View style={styles.buttonContainer}>
                            <FlatButton
                                type="custom"
                                backgroundColor={"#1abc9c"}
                                borderColor={"#16a085"}
                                borderRadius={10}
                                shadowHeight={5}
                                containerStyle={{
                                    flex:1,
                                    height: 50,
                                }}
                                contentStyle={{
                                    fontSize: 22
                                }}
                                onPress={() => this._testAll()}
                            >
                                Test
                            </FlatButton>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default withNavigation(SampleScreen);

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: widthPercentageToDP(8),
        marginTop: heightPercentageToDP(2),
        marginBottom: heightPercentageToDP(5),
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
    },

    vc_floatingButton: {
        position: 'absolute',
        width: 100,
        height: 100,
        backgroundColor: 'red',
        bottom: 30,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf5fd',
        justifyContent: 'center'
    },
    navigationView: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15
    },
    questionView: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        height: 120
    },
    questionText: {
        color: '#4F4F4F',
        fontWeight: '200',
        textAlign: 'justify'
    },
    answerButton: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        height: 60,
        shadowRadius: 0
    }
});

const sampleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf5fd',
    },
    gridView: {
        marginTop: heightPercentageToDP(2),
        marginHorizontal: widthPercentageToDP(4),
        flex: 1,
        flexDirection: 'column',
    },
    itemContainer: {
        justifyContent: 'space-around',
        borderRadius: 10,
        height: 150,
        elevation: 1,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    viewContainer: {
        borderRadius: 10,
        height: 150,
        flex: 1,
    },
    itemName: {
        fontSize: 20,
        color: '#5B5B5B',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#5B5B5B',
    },
    drawImage: {
        height: 35,
        width: 35,
        borderRadius: Platform.OS === 'android' ? 30 : 18,
    },
    cardMain: {
        borderRadius: 10,
        padding: 10,
        height: 100,
        shadowColor: '#03affd',
        shadowOffset: {width: 4, height: 6},
        shadowOpacity: 0.12,
        shadowRadius: 4,
        elevation: 1,
    },
    iconDoc: {
        height: 10,
        width: 10,
        borderRadius: 60,
        justifyContent: 'center',
    },
    LinearGradientStyle: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20
    },

    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color: '#fff',
        backgroundColor: 'transparent'

    },
    positionAbsolute: {
        position: 'absolute',
        left: 25,
        right: 25,
        top: 150,
    },
    progressGray: {
        height: 4,
        width: 150,
        marginTop: 15,
        borderRadius: 5
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
        flex: 3,
        alignItems: 'center',
        height: 200,
    },

});