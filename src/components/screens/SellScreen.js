
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, WebView, Alert} from 'react-native';
import BaseScreen from './BaseScreen';
import { COLORS } from '../../utils/constants';
import { Header, Icon, Content, Input, Item } from 'native-base';
import { askAsync } from '../../utils/settings'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Location } from 'expo'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class SellScreen extends BaseScreen {
    
  startCapturing = async () => {

      
      let cameraResult = await ImagePicker.launchCameraAsync()

      if ( !cameraResult.cancelled ) { 
          cameraResult
        this.setState({images: [...this.state.images, {key: this.state.images.length.toString(), uri: cameraResult.uri }]})
      }


    
  
  };
  handleReturnedMarkers = () => {
      
  }
  async componentDidMount() {
      
    
    this.setState({loading: false})
    this.locator = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 2000,
          distanceInterval: 0
        },
        location => {
            console.log('test')
        }
        //this.onLocationUpdate(location)
      );
      
  }
  onLocationUpdate = (location) => {
      console.log(location)
  }
    state = {
        ...this.state,
        images: [],
        viewing: false,
        viewingIndex: 0,
        drawing: false,
        onWebSuccess: true,
    }
    async componentDidMount() {
        this.setState({loading: false})
    }
    onClickedImage = (index) => {
        // console.log(this.state.images[this.state.viewingIndex])
        this.setState({viewing: true, viewingIndex: index})
    }
     preRender() {
         
        
        return (
            <>
                              
           
    <Dialog
      zIndex={1000}
      visible={this.state.viewing}
      dialogStyle={{
        marginTop: -150,
        width: "85%",
        borderRadius: 0,
        height: 400,
        justifyContent: "center"
      }}
      onTouchOutside={() => {
        this.setState({ viewing: false });
      }}
    >
    <DialogContent>
 {
     this.state.images[this.state.viewingIndex] !== undefined
 ?
    <Image
    style={{height: 400, width: '100%', padding: 10}}
    source={{uri: this.state.images[this.state.viewingIndex].uri}}/>
    :<></>
 }
</DialogContent>
    </Dialog>
             <Header style={{ backgroundColor: COLORS.SECONDARY_COLOR }}>
        <View
          style={{ flexDirection: "row", width: "85%", alignItems: "center", justifyContent: 'center' }}
        >
       
            <Text style={{color: COLORS.PRIMARY_TEXT_COLOR}}>Sell House Form</Text>
        </View>
      </Header>
                <Content>


  
                <View
                    style={{
                    width: "100%",
                    backgroundColor: "#f3f3f3",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                    }}
                >
                   
                        <TouchableOpacity onPress={this.startCapturing}>
                        <Icon name="camera" style={{ color: "gray" }} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10 }}>Add Photo</Text>
                 
                </View>

                {
                    this.state.images.length > 0 ?
                <FlatList
                style={{height: 50}}
                    data={this.state.images}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => {this.onClickedImage(index)}}>
                            <Image 
                                style={{width: 50, height: 50}}
                            
                                 source={{ uri: item.uri }}
                            />
                            </TouchableOpacity>
                        );
                    }}
                    horizontal
                    />
                    : <></>
                }
                    
      <View style={{paddingHorizontal: 20}}>
<Item  style={{ height: 30,  marginBottom: 10}}  underline>
        <Input
          placeholder={"title"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item></View>
      <View style={{paddingHorizontal: 20}}>
<Item style={{height: 30, marginBottom: 10}}  underline>
        <Input
          placeholder={"description"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item></View>
      <View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30, marginBottom: 10}}  underline>
        <Input
          placeholder={"show price"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item></View>
      <View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30,marginBottom: 10}} underline>
        <Input
          placeholder={"video url"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item>
      </View><View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30,marginBottom: 10}} underline>
        <Input
          placeholder={"provice"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item>
      </View>
      
      <View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30,marginBottom: 10}} underline>
        <Input
          placeholder={"city"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item>
</View>  
      <View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30,marginBottom: 10}} underline>
        <Input
          placeholder={"barangay"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item>
</View>
  
<View style={{paddingHorizontal: 20}}>
<Item style={{ height: 30,marginBottom: 10}} underline>
        <Input
          placeholder={"address"}
          style={{paddingHorizontal: 20,fontSize: 12}}
          onChangeText={text => {}}
/>
      </Item>
</View>
{
    this.state.onWebSuccess ? 
<WebView
        style={{height: 500, width: 500}}
        onError={(err) => this.setState({onWebSuccess: false})}
         source = {{ uri:
         'http://210.14.16.69:3000/mobile' }}
    />:<></>
         }
<View style={{ height: 50, paddingHorizontal: 20, flexDirection: 'row'}}>
<TouchableOpacity style={{ flex: 1, justifyContent: 'center',  alignItems: 'center', backgroundColor: COLORS.SECONDARY_COLOR}} onPress={() => {
                    Alert.alert(
                        '',
                        'Your house has been posted',
                        [
                          {text: 'OK', onPress: () => {
                              this.props.navigation.goBack()
                          }},
                        ],
                        {cancelable: true},
                      );
                }}>


                <Text style={{color: 'white',  textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                    Submit
                </Text>
                </TouchableOpacity>
                </View>

                
                </Content>
                
            </>
        );
     }
    }


