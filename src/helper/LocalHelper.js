import React from 'react';

import {
    AsyncStorage
} from 'react-native';
import UtilHelper from "./UtilHelper";

export default class LocalHelper {

    // Enum Str
    static topicResult = 'topicResult';
    static score = 'score';
    static profile = 'profile';
    static testResult = 'testResult';

    static version = 'version';
    static voca = 'voca';
    static exam = 'exam';

    static _storeMapData = async (keyStr, mapObject) => {
        try {
            // if (typeof mapObject === 'Map {}')

            console.log('_storeMapData ' + keyStr + ' : ' + mapObject);
            UtilHelper._printMapConsole(mapObject);
            const str = JSON.stringify(Array.from(mapObject.entries()));

            await AsyncStorage.setItem(keyStr, str,
                error => {
                    error ? console.log('ERROR - _storeMapData - ' + keyStr + ' : ' + error) : undefined;
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
                    error ? console.log('ERROR - _getMapData - ' + keyStr + ' : ' + error) : undefined;
                });
            console.log('_getMapData ' + keyStr + ' : ' + str);
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