import React from 'react';
import {SERVER_URL} from '../constants/index';


export default class VersionHelper {

    static _checkVersion = () => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    static _checkVersionSync = async () => {
        const response = await fetch(SERVER_URL + '/version.json');
        const json = await response.json();
        return json;
    }

}