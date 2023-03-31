import React, { Component } from 'react';
import Editor from './Editor.js';
import Listicle from './Listicle.js';

export default class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            info: props.info,
            isEditing: true,
            index: null
        };

        this.edit = this.edit.bind(this);
    }

    edit(e) {
        this.setState(Object.assign(this.state, {isEditing: true}));
    }

    render() {
        const {info, isEditing} = this.state;    
        
        return (
            <div>
                { isEditing ? 
                    <Editor entry={this} pushEntry={this.props.pushEntry}/> 
                : info !== null && [
                    <Listicle info={info} />,
                    <button onClick={this.edit}>Edit</button>
                ]
            }
            </div>
        );
    }
}