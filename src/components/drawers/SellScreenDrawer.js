import React from "react";
import BaseComponent from "../BaseComponent";
import {NavigationEvents} from 'react-navigation';
export default class SellScreenDrawer extends React.Component {

 
    render() {
      return (
        <>
        <NavigationEvents onDidFocus={() => console.log('I am triggered')} />
        </>
      );
    }
}
