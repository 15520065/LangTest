import React from 'react';

import {
    AsyncStorage
} from 'react-native';
import UtilHelper from "./UtilHelper";

export default class LocalStoreHelper {

    // Enum Str
    static topicResult = 'topicResult';
    static score = 'score';
    static profile = 'profile';
    static testResult = 'testResult';
    static version = 'testResult';

    static _storeMapData = async (keyStr, mapObject) => {
        try {
            console.log('_storeMapData' + keyStr + ' : ');
            UtilHelper._printMapConsole(mapObject);
            const str = JSON.stringify(Array.from(mapObject.entries()));

            await AsyncStorage.setItem(keyStr, str,
                error => {
                    // console.log('ERROR - _storeMapData - ' + keyStr + ' : ' + error);
                });

        } catch (error) {
            // Error saving data
            console.log('ERROR - _storeMapData - ' + keyStr + ' : ' + error);
        }
    };

    static _getMapData = async (keyStr) => {
        try {
            const str = await AsyncStorage.getItem(keyStr,
                    error => {
                // console.log('ERROR - _storeMapData - ' + keyStr + ' : ' + error);
            });
            return new Map(JSON.parse(str));
        } catch (error) {
            console.log('Chi CS error: ' + error);
        }
    };

    static _removeData = async (keyStr) => {
        try {
            await AsyncStorage.removeItem(keyStr);
        } catch (error) {
            console.log('Chi CS error: ' + error);
        }
    };
}