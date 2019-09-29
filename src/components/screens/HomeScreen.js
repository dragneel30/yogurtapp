
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BaseComponent from '../BaseComponent';
import BaseScreen from './BaseScreen';
import YogurtHeader from '../YogurtHeader';
import { Content, Icon } from 'native-base';
import CardMenu from '../CardMenu';

export default class HomeScreen extends BaseScreen {
    state = {
        ...this.state,
    }
    
    startCapturing = async () => {

        let granted = await askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)

        if ( granted ) {
        
        let cameraResult = await ImagePicker.launchCameraAsync()

        if ( !cameraResult.cancelled ) { 
            this.nav("CameraPreviewScreen", {
            photo: cameraResult,
            finalizeCapturedImage: this.finalizeCapturedImage,
            startCapturing: this.startCapturing
            });
        }

        } 
    
    };
    componentDidMount() {
        this.setState({loading: false})
    }


    preRender() {
        
        return (
            <>
            <YogurtHeader/>
                <Content>
                        <View style={{flexDirection: 'row'}}>
                            <CardMenu 
                            mainStyle={{width: '50%',}}
                        icon={require("../../../assets/project_icon.png")}
                        onPress={() => {
                            this.props.navigation.navigate('SellScreen')
                        }}
                        imageStyle={{height: 50, width: 50}} title={"SELL HOUSE"}/>
                            <CardMenu 
                            mainStyle={{width: '50%',}}
                        icon={require("../../../assets/project_icon.png")}
                        imageStyle={{height: 50, width: 50}} title={"VIEW YOUR HOUSES"}/>
                        </View>
                        
                        <CardMenu mainStyle={{width: '50%', alignSelf: 'center'}} 
                        icon={require("../../../assets/project_icon.png")}
                        imageStyle={{height: 50, width: 50}} title={"TRANSACTION HISTORY"}/>
                   
                </Content>
                
            </>
        );
    }
}

