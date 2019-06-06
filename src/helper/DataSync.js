import React from 'react';
import {SERVER_URL} from "../constants";
import LocalHelper from "./LocalHelper";
import UtilHelper from "./UtilHelper";

class DataSync {
    // _checkVersion = async () => {
    //
    //     const response = await fetch(SERVER_URL + '/version.json');
    //     if (!response)
    //         return false;
    //     const json = await response.json();
    //
    //     if (json.exam === 1 || json.voca === 1) {
    //         return true;
    //     }
    //     return false;
    // }


    constructor() {
        if (!DataSync.instance) {
            this.data = {};
            DataSync.instance = this;
        }

        return DataSync.instance;
    }


    getVoca() {
        return this.data['voca'];
    }

    setVoca(object) {
        this.data['voca'] = object;
    }

    getExam() {
        return this.data['exam'];
    }

    setExam(object) {
        this.data['exam'] = object;
    }


    _checkVersion = async () => {
        return fetch(SERVER_URL + '/version.json')
            .then(response => response.json())
            .then(async (versionServer) => {
                // Fetch Version
                let version = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.version));
                LocalHelper._storeMapData(LocalHelper.version, UtilHelper._objectToMap(versionServer));
                let notInit = false;
                if ((version.exam === undefined || version.voca === undefined)) {
                    notInit = true;
                }

                // Fetch Vocabulary
                if (version.voca !== versionServer.voca || notInit) {
                    console.log('Fetch Voca From Server');
                    await this._syncVocaData();
                    LocalHelper._storeMapData(LocalHelper.voca, UtilHelper._objectToMap(instance.getVoca()));
                } else {
                    let voca = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.voca));
                    instance.setVoca(voca);
                }

                // Fetch Exam
                // if (version.exam !== versionServer.exam || notInit) {
                //     console.log('Fetch Exam From Server')
                //     await this._syncExamData();
                //     LocalHelper._storeMapData(LocalHelper.exam, UtilHelper._objectToMap(instance.getExam()))
                //
                // }else {
                //     let exam = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.exam))
                //     instance.setExam(exam);
                // }

                let assetObject = instance._getAssetFromObject(instance.getVoca());

                return assetObject;
            })
            .catch(async (error) => {
                console.warn('_checkVersion Error' + error);

                let voca = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.voca));
                instance.setVoca(voca);

                let exam = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.exam));
                instance.setExam(exam);

                console.log('voca ' + instance.flatten(voca));

                return undefined;
            });
    };

    _syncVocaData = async () => {
        return fetch(SERVER_URL + '/voca.json')
            .then(response => response.json())
            .then((voca) => {
                instance.setVoca(voca);
            })
            .catch(function (error) {
                console.warn('_syncVocaData Error' + error);
                return false;
            });
    };


    _syncExamData = async () => {
        return fetch(SERVER_URL + '/exam.json')
            .then(response => response.json())
            .then((exam) => {
                instance.setExam(exam);
            })
            .catch(function (error) {
                console.warn('_syncExamData Error' + error);
                return false;
            });
    };

    _getAssetFromObject(...objects) {
        let imageAsset = [];
        let audioAsset = [];

        if (objects) {
            objects.forEach(object => {
                if (object) {
                    Object.values(this.flatten(object)).forEach(value => {
                        if (value.includes('http')) {
                            if (value.includes('.mp3') || value.includes('.mp4') || value.includes('.wav')) {
                                audioAsset.push(value);
                            }
                            if (value.includes('.png') || value.includes('.jpg')) {
                                imageAsset.push(value);
                            }
                        }
                    });
                }
            });
        }


        return {
            imageAsset: imageAsset,
            audioAsset: audioAsset,
        };
    }

    flatten = (data) => {
        var result = {};

        function recurse(cur, prop) {
            if (Object(cur) !== cur) {
                result[prop] = cur;
            } else if (Array.isArray(cur)) {
                for (var i = 0, l = cur.length; i < l; i++)
                    recurse(cur[i], prop + "[" + i + "]");
                if (l == 0)
                    result[prop] = [];
            } else {
                var isEmpty = true;
                for (var p in cur) {
                    isEmpty = false;
                    recurse(cur[p], prop ? prop + "." + p : p);
                }
                if (isEmpty && prop)
                    result[prop] = {};
            }
        }

        recurse(data, "");
        return result;
    };


}

const instance = new DataSync();
Object.freeze(instance);

export default instance;