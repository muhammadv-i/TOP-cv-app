import React, { Component } from 'react';
import Editor from './Editor.js';
import Listicle from './Listicle.js';

export default class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.type,
            info: props.info,
            isEditing: false,
        };

        this.edit = this.edit.bind(this);
    }

    edit(e) {
        console.log('editing...');
        this.setState(Object.assign(this.state, {isEditing: true}));
        console.log('parent Entry component: ', this);
    }

    render() {
        const {type, info, isEditing} = this.state;    

        return (
            <div>
                { isEditing ? 
                    <Editor info={info} type={type} parent={this}/> 
                : [
                    <Listicle info={info} />,
                    <button onClick={this.edit}>Edit</button>
                ]
            }
            </div>
        );
    }
}