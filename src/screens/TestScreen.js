import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Button,
    ToastAndroid,
} from 'react-native';

export default TestScreen = () => {
    const buttonPressed = (pMethod, pData) => {
        getData(pMethod, pData)
    }
    const getData = (pMethod, pData) => {
        console.log(`getData => pMethod: ${pMethod}, pData: ${pData}`)
        //let baseUrl = 'http://10.6.12.115/QC_VersionStatus/Forum/forumProd.asmx'
        let baseUrl = 'http://mis0078213.corp.cellcom.co.il/Forum/forumProd.asmx'
        let fullUrl = baseUrl + '/' + pMethod
        let reqMethod = 'POST'

        let reqHeaders = {
            'Content-Type': 'application/json; charset=utf-8',
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }

        let reqData = pData

        fetch(fullUrl, {
            method: reqMethod,
            headers: reqHeaders,
            data: reqData,
        })
            .then(response => response.json())
            .then(response => {
                if (response.d) {
                    showShortToast(response.d)
                }
            })
            .catch(error => showShortToast('error'))
    }
    const showShortToast = (text) => {
        ToastAndroid.showWithGravity(text, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    return (
        <ScrollView style={styles.tab1}>
            <View>
                <Button title="GetForumForMe" onPress={() => buttonPressed('GetForumForMe', {})} />
                <Button title="GetApprovedRequestsToday" onPress={() => buttonPressed('GetApprovedRequestsToday', {})} />
                <Button title="GetDoneForumForMe" onPress={() => buttonPressed('GetDoneForumForMe', {})} />
                <Button title="GetRequestsToday" onPress={() => buttonPressed('GetRequestsToday', {})} />
                <Button title="HelloWorld" onPress={() => buttonPressed('HelloWorld', {})} />
                <Button title="getAllRole" onPress={() => buttonPressed('getAllRole', { requestID: '93209' })} />
                <Button title="getName" onPress={() => buttonPressed('getName', {})} />
                <Button title="getRole" onPress={() => buttonPressed('getRole', { requestID: '93209' })} />
                <Button title="testgetName" onPress={() => buttonPressed('testgetName', {})} />
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    tab1: {
        backgroundColor: '#ff0000',
    },
    btn: {
    }
});