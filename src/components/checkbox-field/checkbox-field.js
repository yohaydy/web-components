import React, { Component } from 'react';
import './checkbox-field-wc'

export default class CheckboxField extends Component {
    render() {
        const x = 5 > 2;
        return (
            <div>
                <checkbox-field value={x}/>
            </div>
        );
    }
}