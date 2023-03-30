import React, { Component } from 'react';
import Entry from './Entry.js';
import uniqid from 'uniqid';

export default class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };
    }



    render() {
        const title = this.props.children;
        return (
            <>
                <h1>{title}</h1>

                <Entry info={{name: 'mohamed', age: 113, method: 'zettelkasten'}}></Entry>
                
                { this.props.add && this.state.entries.length > 0 && <button>Add</button> }
            </>
        );
    }
}