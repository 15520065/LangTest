import React from 'react';
import {Container} from 'unstated';
import LocalHelper from '../helper/LocalHelper';

export default class WordScreenStore extends Container {

    constructor(props) {
        super(props);
        this.state = {
            topicResult:null
        };
    }

    _refreshList = () => {
        this._updateData();
    };

    _updateData = async () => {
        const topicResult = await LocalHelper._getMapData(LocalHelper.topicResult);

        this.setState(
            {
                topicResult: topicResult,
            }
        );
        console.log('Chi CS _updateData: ' + JSON.stringify(Array.from( topicResult.entries())));
    }
}