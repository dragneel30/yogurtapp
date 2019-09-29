
import React, { Component } from 'react';
import BaseComponent from "../BaseComponent.js";


export default class BaseScreen extends BaseComponent {


    requiredRender() {

        return (
            <>
            {
                this.preRender()
            }
            </>
        )
    }
    
}
