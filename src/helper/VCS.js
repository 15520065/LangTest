import React from 'react';
import {SERVER_URL} from "../constants";

class VCS {
    // _checkVersionSync = async () => {
    //
    //     const response = await fetch(SERVER_URL + '/version.json');
    //     if (!response)
    //         return false;
    //     const json = await response.json();
    //
    //     if (json.exam === 1 || json.vocal === 1) {
    //         return true;
    //     }
    //     return false;
    // }

    _checkVersionSync = async () => {
        return fetch(SERVER_URL + '/version.json')
            .then(response => response.json())
            .then(function (json) {
                if (json.exam === 1 || json.vocal === 1) {
                    return true;
                }
                return false;
            })
            .catch(function (error) {
                console.warn('_checkVersionSync Error');
                return false;
            });
    };

}

const instance = new VCS();
Object.freeze(instance);

export default instance;