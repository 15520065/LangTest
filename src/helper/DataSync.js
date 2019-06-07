import React from 'react';
import {SERVER_URL} from "../constants";
import LocalHelper from "./LocalHelper";
import UtilHelper from "./UtilHelper";
import {Image} from "react-native";
import {Asset, FileSystem, Font} from "expo";

class DataSync {

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

    setVersionServer(object) {
        this.data['versionServer'] = object;
    }

    saveVersionServer() {
        if (this.data && this.data['versionServer']) {
            LocalHelper._storeMapData(LocalHelper.version, UtilHelper._objectToMap(this.data['versionServer']));
        }
    }


    _checkVersion = async () => {
        return fetch(SERVER_URL + '/version.json')
            .then(response => response.json())
            .then(async (versionServer) => {
                this.setVersionServer(versionServer);

                // Fetch Version
                let imageAsset = [];
                let audioAsset = [];

                let version = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.version));

                // Fetch Vocabulary
                if (version.voca === undefined || version.voca !== versionServer.voca) {
                    console.log('Fetch Voca From Server ' + version.voca);
                    await this._syncVocaData();
                    LocalHelper._storeMapData(LocalHelper.voca, UtilHelper._objectToMap(instance.getVoca()));

                    audioAsset = [...audioAsset,
                        ...instance._getAudioAssetFromObject(instance.getVoca())];
                } else {
                    let voca = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.voca));
                    instance.setVoca(voca);
                }

                // Fetch Exam
                if (version.exam === undefined || version.exam !== versionServer.exam) {
                    console.log('Fetch Exam From Server ' + version.exam + " " + versionServer.exam);
                    await this._syncExamData();
                    LocalHelper._storeMapData(LocalHelper.exam, UtilHelper._objectToMap(instance.getExam()))

                    audioAsset = [...audioAsset,
                        ...instance._getAudioAssetFromObject(instance.getExam())];
                }else {
                    let exam = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.exam))
                    instance.setExam(exam);
                }


                imageAsset = [...imageAsset,
                    ...instance._getImageAssetFromObject(instance.getVoca(), instance.getExam())];

                return {
                    imageAsset:imageAsset,
                    audioAsset:audioAsset
                };
            })
            .catch(async (error) => {
                console.warn('_checkVersion Error - ' + error);

                let voca = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.voca));
                instance.setVoca(voca);

                let exam = UtilHelper._mapToObject(await LocalHelper._getMapData(LocalHelper.exam));
                instance.setExam(exam);

                return undefined;
                //TODO: NEED THIS FOR LOAD EXAM AUDIO ?
                // let assetObject = instance._getAssetFromObject(instance.getVoca());
                // return assetObject;
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

    _getImageAssetFromObject(...objects) {
        let imageAsset = [];

        if (objects) {
            objects.forEach(object => {
                if (object) {
                    Object.values(this.flatten(object)).forEach(value => {
                        if (value && typeof value === "string" && value.includes('http')) {
                            if (value.includes('.png') || value.includes('.jpg')) {
                                imageAsset.push(value);
                            }
                        } else if (value === undefined) {
                            console.log("Error _getAudioAssetFromObject : undefined" );
                        }
                    });
                }
            });
        }


        return imageAsset;
    }

    _getAudioAssetFromObject(...objects) {
        let audioAsset = [];

        if (objects) {
            objects.forEach(object => {
                if (object) {
                    Object.values(this.flatten(object)).forEach(value => {
                        if (value && typeof value === "string" && value.includes('http')) {
                            if (value.includes('.mp3') || value.includes('.mp4') || value.includes('.wav')) {
                                audioAsset.push(value);
                            }
                        } else if (value === undefined) {
                            console.log("Error _getAudioAssetFromObject : undefined" );
                        }
                    });
                }
            });
        }


        return audioAsset;
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


    cacheImages(images) {
        return images.map(image => {
            if (typeof image === 'string') {
                // Image.abortPrefetch(image);
                // console.log(image);
                return Image.prefetch(image);
            } else {
                return Asset.fromModule(image).downloadAsync();
            }
        });
    }

    cacheFonts(fonts) {
        return fonts.map(font => Font.loadAsync(font));
    }

    cacheAudio(audios) {
        return audios.map(audio => {
            if (typeof audio === 'string') {
                return FileSystem.downloadAsync(
                    audio,
                    FileSystem.documentDirectory + UtilHelper._getFileName(audio)
                )
                    .then(async ({uri}) => {
                        // console.log("cacheAudio - " + uri)
                    })
                    .catch(error => {
                        console.log('ERROR Loading Audio - ' + audio + " : " + error);
                    });
            } else {
                return Asset.fromModule(audio).downloadAsync();
            }
        });
    }
}

const instance = new DataSync();
Object.freeze(instance);

export default instance;