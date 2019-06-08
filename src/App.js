import React from 'react';
import {
    Alert,
    BackHandler,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import {AppLoading, Asset, FileSystem, Font} from 'expo';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as firebase from 'firebase';

import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
    DrawerItems,
    navigate
} from 'react-navigation';


import QuizScreen from './screen/QuestionScreen/QuizScreen';
import TopicScreen from './screen/vocabularySreen/TopicScreen';
import WordScreen from './screen/vocabularySreen/WordScreen';

import AppNavigator from './navigation/AppNavigator';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import ChartScreen from './screen/ChartScreen';
import ResultScreen from './screen/QuestionScreen/ResultScreen';
import LeaderBoardScreen from './screen/LeaderBoardScreen';
import LearnScreen from './screen/vocabularySreen/LearnScreen';
import ProfileScreen from './screen/ProfileScreen/ProfileScreen';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Step1Question from "./screen/Step1/Step1Question";
import DataSync from "./helper/DataSync";
import UtilHelper from "./helper/UtilHelper";
import SampleScreen from "./screen/HomeScreen/SampleScreen";
import StepScreen from "./screen/HomeScreen/StepScreen";

//huy
// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyD118xcgkOSzBjghv7_gzot8AmvI4itCAA',
    authDomain: 'fasttoeic-d9d3c.firebaseapp.com',
    databaseURL: 'https://fasttoeic-d9d3c.firebaseio.com',
    projectId: 'fasttoeic-d9d3c',
    storageBucket: '',
    messagingSenderId: '935557755374'
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const CustomDrawerContentComponent = (props) => (
    // <Container>
    //     <Header style={{height: 200, backgroundColor:'white'}}>
    //         <Body>
    //         <Image style={styles.drawImage}
    //             source={require('../assets/images/reading.jpg')}
    //         />
    //         </Body>
    //     </Header>
    //     <Content>
    //         <DrawerItems {...props}/>
    //     </Content>
    // </Container>
    <SafeAreaView style={{flex: 1}}>
        <View style={{
            height: 150, backgroundColor: 'white', alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity style={{height: 120, width: 120,}}
                // onPress={()=> this.props.navigation.navigate('Profile')}
            >
                <Image source={require('../assets/splash.png')}
                       style={{height: 120, width: 120, borderRadius: 60}}
                />
            </TouchableOpacity>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
);

// const AppNavigator = createStackNavigator(
//     {
//         App: {
//             screen: HomeScreen,
//         },
//         Topic: {
//             screen: TopicScreen,
//         },
//         Word: {
//             screen: WordScreen
//         },
//     },
//     {
//         initialRouteName:'App',
//         drawerPosition: 'center',
//         contentComponent: CustomDrawerContentComponent,
//         drawerOpenRoute:'DrawerOpen',
//         drawerCloseRoute:'DrawerClose',
//         drawerToggleRoute:'DrawerToggle',
//         headerMode: 'none'
//     }
// );

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };


    }

    _loadAssetsAsync = async () => {

        const fontAssets = DataSync.cacheFonts([FontAwesome.font, {
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
        }]);

        const asset = await DataSync._checkVersion();


        let imageAsset = [];
        let audioAsset = [];

        if (asset) {
            imageAsset = asset.imageAsset;
            audioAsset = asset.audioAsset;
        }

        let audioAssetPromise = audioAsset ? DataSync.cacheAudio(audioAsset) : [];
        let imageAssetPromise = imageAsset ? DataSync.cacheImages(imageAsset) : [];

        let voca = DataSync.getVoca();
        let exam = DataSync.getExam();
        if ((voca === undefined || voca === null || Object.entries(voca).length === 0)
            || (exam === undefined || exam === null || Object.entries(exam).length === 0)) {
            Alert.alert(
                'No Internet Access',
                'Please check your Internet connection',
                [
                    {
                        text: 'Cancel', onPress: () => {
                            BackHandler.exitApp();
                        }
                    },
                    {
                        text: 'OK', onPress: () => {
                            Expo.Updates.reload();
                        }
                    },
                ],
                {cancelable: false}
            );

        }


        let imageStaticAssetPromise = Asset.loadAsync([
            require('../assets/images/home/bg/bgs6.png'),
            require('../assets/images/home/bg/bgs5.png'),
            require('../assets/images/home/text/step12.png'),
            require('../assets/images/home/bg/bgs4.png'),
            require('../assets/images/home/text/step22.png'),
            require('../assets/images/profile.jpg'),

            require('../assets/images/home/bg/bgs5.png'),
            require('../assets/images/home/text/listening1.png'),
            require('../assets/images/home/bg/bgs10.png'),
            require('../assets/images/home/text/reading1.png'),

            require('../assets/images/background.jpg'),

            require('../assets/icon/avatar1.jpg'),
            require('../assets/icon/avatar2.jpg'),
            require('../assets/icon/avatar3.jpg'),
            require('../assets/icon/avatar4.jpg'),
        ]);

        await Promise.all([].concat(audioAssetPromise, imageAssetPromise,imageStaticAssetPromise, fontAssets));
    };

    render() {
        if (this.state.loading) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => {
                        DataSync.saveVersionServer();
                        this.setState({loading: false});
                    }}
                    onError={(error) => {
                        console.warn("AppLoading Error + " + error);
                    }}
                />
            );
        }
        return (
            <MyApp/>

            // <View style={styles.container}>
            //     <WordFlatList>

            //     </WordFlatList>
            // </View>
            //<QuestionScreen/>
            // <View style={styles.container}>
            //     {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            //     <AppContainer />
            // </View>
            // {/*<ProfileScreen/>*/}
            //<Step1Question/>
            //<SampleScreen/>
        );
    }
}


const OtherScreen = createSwitchNavigator({
    QuizScreen: QuizScreen,
    Results: ResultScreen
});

const TopicStack = createStackNavigator({
    Topic: TopicScreen,
    Word: WordScreen,
    Learn: LearnScreen
});

const MyDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <FontAwesome name='home' style={{fontSize: 24, color: tintColor}}/>
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <FontAwesome name='user' style={{fontSize: 24, color: tintColor}}/>

                )
            }
        },
        Topic: {
            screen: TopicStack,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <MaterialCommunityIcons name='dictionary' color={tintColor} size={24}/>
                )
            }
        },
        Chart: {
            screen: ChartScreen
        },
        LeaderBoard: {
            screen: LeaderBoardScreen
        },
    },
    {
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
);

const AppNavigation = createStackNavigator({
    Default: {
        screen: MyDrawerNavigator,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    Other: {
        screen: OtherScreen,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    Step1: {
        screen: Step1Question,
    },
    SampleScreen: {
        screen: SampleScreen,
    },
    StepScreen: {
        screen: StepScreen,
    }
}, {
    headerMode: 'none',
});


const AppContainer = createAppContainer(AppNavigator);
const MyApp = createAppContainer(AppNavigation);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawImage: {
        flex: 1,
        height: 100,
        width: 200,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

