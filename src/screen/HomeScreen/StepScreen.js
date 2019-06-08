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


import FlatButton from 'react-native-flat-button';
import {heightPercentageToDP, widthPercentageToDP} from "../../helper/ratioHelper";

class StepScreen extends React.Component {
    step = null;

    static navigationOptions = {
        header: null // !!! Hide Header
    };

    constructor(props) {
        super(props);

        let name = props.navigation.getParam('name', null);
        let stepIndex = props.navigation.getParam('stepIndex', null);
        let stepData = props.navigation.getParam('stepData', null);
        let examId = props.navigation.getParam('examId', null);

        this.step = {
            name: name,
            stepIndex: stepIndex,
            stepData: stepData,
            examId: examId
        };
    }

    _readingOrListeningClick(item, index) {
        const {navigation} = this.props;

        const idStr = this.step.examId + '-' + this.step.stepIndex;
        const stepData = this.step.stepData;
        
        if (item.name === 'Listening' && stepData && stepData.listening) {
            sharedQuizService.initTest(idStr + '-listening', stepData.listening,
                stepData.listening.length, 3, stepData.listening.length * 60 * 1000);
            navigation.navigate('QuizScreen');
        } else if (stepData && stepData.reading) {
            sharedQuizService.initTest(idStr + '-reading', stepData.reading,
                stepData.reading.length, 3, stepData.reading.length * 60 * 1000);
            navigation.navigate('QuizScreen');
        } else {
            Alert.alert('No question Data');
        }
    }

    _testAll = () => {
        const {navigation} = this.props;

        let questionData = [];

        if (this.step && this.step.stepData)
            questionData = questionData.concat(this.step.stepData.listening, this.step.stepData.reading);

        if (questionData.length === 0) {
            Alert.alert('No question Data');
        } else {
            const id = "sample1";
            sharedQuizService.initTest(id, questionData, questionData.length, 3, questionData.length * 60 * 1000);
            navigation.navigate('QuizScreen');
        }
    };

    render() {
        const items = [
            {
                name: 'Listening',
                code: DataHelper._getPercent(1),
                icon: require('../../../assets/images/home/bg/bgs5.png'),
                iconText: require('../../../assets/images/home/text/listening1.png')
            },
            {
                name: 'Reading',
                code: DataHelper._getPercent(),
                icon: require('../../../assets/images/home/bg/bgs10.png'),
                iconText: require('../../../assets/images/home/text/reading1.png')
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
                    <Title>{this.step.name}</Title>
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
                                        onPress={() => this._readingOrListeningClick(item, index)}
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
                                                         resizeMode='stretch'
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
                                onPress={() => this._testAll}
                                backgroundColor={"#1abc9c"}
                                borderColor={"#16a085"}
                                borderRadius={10}
                                shadowHeight={5}
                                containerStyle={{
                                    flex: 1,
                                    height: 50,
                                }}
                                contentStyle={{
                                    fontSize: 22
                                }}
                            >
                                Test All
                            </FlatButton>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}

export default withNavigation(StepScreen);

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