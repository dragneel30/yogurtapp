import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header, Icon } from "native-base";

import { COLORS } from "../utils/constants.js";


export default class YogurtHeader extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: COLORS.SECONDARY_COLOR, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: COLORS.PRIMARY_TEXT_COLOR}}>WELCOME TO YOGURT</Text>
      </Header>
    );
  }
}
