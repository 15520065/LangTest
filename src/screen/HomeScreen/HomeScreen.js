import React, {PureComponent} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import GridView from 'react-native-super-grid';

import {Body, Button, Container, Header, Left, Right, Title} from 'native-base';
// import MyProfile from '../entity/ProfileData';
import sharedQuizService from '../../services/QuizService';
import {QuestionType} from '../../entity/Question';
import DataHelper from "../../helper/DataHelper";
import {Entypo} from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from "../../components/SliderEntry";
import { Rating, AirbnbRating } from 'react-native-ratings';
import {widthPercentageToDP} from "../../helper/ratioHelper";
import DataSync from "../../helper/DataSync";

const NumItems = 6;
const Items = [];
for (let i = 0; i < NumItems; i++) {
    Items.push(i);
}

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export default class HomeScreen extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            scroll: true,
        };
    }

    componentDidMount() {
        if (this.props.navigation != null) {
            this.props.navigation.addListener(
                'didFocus',
                payload => {
                    DataHelper._loadTestResult((testResult) => {
                        DataHelper._loadUserProfile((profile) => {
                            this.setState({
                                avatarRequired: DataHelper._getUserAvatar(),
                                name: profile.get('name'),
                                totalCorrectAnswer: DataHelper._getTotalCorrectAnswer(),
                                totalTimeSpend: DataHelper._getTotaltimeSpent(),
                            });
                            this.setState({
                                isLoading: false
                            });
                        });
                    });
                }
            );
        }
    }

    disableScroll() {
        this.setState({scroll: !this.state.scroll});
    }

    _openProfileScreen() {
        const {navigation} = this.props;
        navigation.navigate('ProfileScreen');
    }

    // _onPressCard(index) {
    //     // Toast.show('This is a long toast.', Toast.LONG)
    //     const {navigation} = this.props;
    //     switch (index) {
    //         case 0:
    //             sharedQuizService.initTest(QuestionType.part1, 5, 3, 5 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 1:
    //             sharedQuizService.initTest(QuestionType.part2, 10, 3, 8 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 2:
    //             sharedQuizService.initTest(QuestionType.part3, 15, 3, 10 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 3:
    //             sharedQuizService.initTest(QuestionType.part4, 15, 3, 10 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 4:
    //             sharedQuizService.initTest(QuestionType.part5, 15, 3, 10 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 5:
    //             sharedQuizService.initTest(QuestionType.part6, 10, 3, 7 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //         case 6:
    //             sharedQuizService.initTest(QuestionType.part7, 10, 3, 7 * 60 * 1000);
    //             navigation.navigate('QuizScreen');
    //             break;
    //     }
    // }

    static navigationOptions = {
        header: null, // !!! Hide Header
        // drawerIcon: ({tintColor}) => (
        //     <Icon name='ios-home' style={{fontSize: 24, color: tintColor}}/>
        // )
        // title:'Home 1',
        // // header: { visible:false },
        //   drawerIcon: (
        //       <Image source={require('../../assets/images/home.png')}
        //              style={{height: 24, width: 24}}
        //       />
        //   )
    };

    render() {
        const CarouselData = DataSync.getExam()?DataSync.getExam().exams:[];
        const {navigation} = this.props;
        return (

            <Container>
                <Header androidStatusBarColor="#0076BF"
                        style={{backgroundColor: Platform.OS === 'android' ? '#019AE8' : '#FFFFFF'}}>
                    <Left>
                        {Platform.OS === 'ios'
                            ?
                            <Button transparent onPress={() => {
                                this.props.navigation.openDrawer();
                            }}>
                                <Entypo name='menu' color='#000000' size={24}/>
                            </Button>
                            :
                            <Button transparent onPress={() => {
                                this.props.navigation.openDrawer();
                            }}>
                                <Entypo name='menu' color='#ffffff' size={24}/>
                            </Button>
                        }
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <ScrollView style={styles.container}>
                    <ImageBackground
                        style={styles.headerBackgroundImage}
                        blurRadius={0}
                        source={require('../../../assets/images/background.jpg')}
                    >
                        <TouchableOpacity onPress={() => {
                            this._openProfileScreen();
                        }}>
                            <Image source={this.state.avatarRequired}
                                   style={styles.imageInfo}
                            />
                        </TouchableOpacity>
                        <Text style={{
                            color: '#ffffff', fontWeight: 'bold',
                            marginTop: 10, fontSize: 16,
                        }}>{this.state.name}</Text>
                    </ImageBackground>

                    <View style={styles.positionAbsolute}>
                        <View style={[styles.cardMain, {backgroundColor: '#ffffff'}]}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flex: 1
                                }}>
                                <View
                                    style={{
                                        flex: 0,
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                    }}>
                                    <Text
                                        style={{
                                            color: '#0099DA',
                                            fontStyle: 'italic',
                                            fontSize: 16
                                        }}>Your Result</Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 10,
                                            alignItems: 'center'
                                        }}>
                                        <View
                                            style={[styles.iconDoc, {backgroundColor: '#FFBA9C'}]}/>
                                        <Text
                                            style={{
                                                color: '#888888',
                                                marginLeft: 10,
                                                fontSize: 12
                                            }}>{this.state.totalCorrectAnswer} Questions</Text>
                                    </View>
                                    <View
                                        style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                                        <View style={[styles.iconDoc, {backgroundColor: '#BC9CFF'}]}/>
                                        <Text style={{
                                            color: '#888888', marginLeft: 10,
                                            fontSize: 12
                                        }}>Time spent: {this.state.totalTimeSpend} min</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flex: 1,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Image style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }} source={require('../../../assets/images/cup_icon_48.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 1,
                        marginTop: widthPercentageToDP(19)}}>
                        <Carousel
                            ref={c => this._slider1Ref = c}
                            data={CarouselData}
                            renderItem={({item, index}) => {
                                return <SliderEntry navigation={this.props.navigation}  data={item} even={false} />;
                            }}
                            sliderWidth={viewportWidth}
                            itemWidth={widthPercentageToDP(75) + widthPercentageToDP(1) * 2}
                            hasParallaxImages={false}
                            firstItem={1}
                            inactiveSlideScale={0.94}
                            inactiveSlideOpacity={0.7}
                            // inactiveSlideShift={20}
                            // containerCustomStyle={styles.slider}
                            contentContainerCustomStyle={{paddingVertical: 10}}
                            loop={true}
                            loopClonesPerSide={2}
                            autoplay={true}
                            autoplayDelay={500}
                            autoplayInterval={50000}
                            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                        />
                    </View>

                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf5fd',
    },
    imageInfo: {
        height: 60,
        width: 60,
        borderRadius: 20,
        borderColor: '#ffffff',
        borderWidth: 2,
        marginTop: 10
    },
    imageBackgroundOfStep: {
        borderRadius: 10,
        height: 150,
    },
    gridView: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
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
        padding: 10,
        paddingVertical: 10,
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
