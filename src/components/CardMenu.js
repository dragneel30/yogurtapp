import React from "react";
import { Image, Text } from "react-native";
import { Card, CardItem, Body, Col, Grid, Row, View } from "native-base";
import { DARK_VALUE_TEXT_COLOR, LIGHT_VALUE_TEXT_COLOR } from "../utils/constants";

export default class CardMenu extends React.Component {
    
  render() {
    return (
      <Card style={this.props.mainStyle}>
        <CardItem button onPress={this.props.onPress}>
            <View style={{flex: 1,alignItems: 'center'}}>

              <Image source={this.props.icon} style={this.props.imageStyle} />

              <View style={{flex: 1, alignItems: 'center' }}>
                <Text styles={{flex: 1, fontSize: 10 }}>
                  {this.props.title}
                </Text>

              </View>
          
            </View>
        </CardItem>
      </Card>
    );
  }
  
}
