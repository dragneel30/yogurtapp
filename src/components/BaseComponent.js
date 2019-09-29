import React from "react";
import { Container, Content, Text, Body, Icon, Header } from "native-base";
import { SafeAreaView } from 'react-navigation';

import { Dimensions, Platform } from 'react-native';
import { COLORS } from "../utils/constants";



export default class BaseComponent extends React.Component {
  
  state = {
      loading: true,
  }

  


  nav = (screen, props) => {
    this.props.navigation.navigate(screen, props)        
}
requiredRender() {
    throw new Error("requiredRender need")
}
preRender() {
    throw new Error("preRender need")
}
  render() {

    if ( this.state.loading ) {
      return (<></>)
    } else {


      return (
      
        <SafeAreaView style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: Platform.OS === "android" ? Expo.Constants.statusBarHeight : 0
         }}>
         
         
          <Container style={{ backgroundColor: COLORS.PRIMARY_COLOR }}>
              {this.requiredRender()}
          </Container>
        </SafeAreaView>
      
      );
    }

}

    
  preRender() {
    throw new Error("You need to implement my BaseComponent::preRender() :)");
  }


  commonRender() {

  }
  
  
  

}
