import React, { Component } from 'react';
import Entry from './Entry.js';
import uniqid from 'uniqid';

export default class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };

        this.pushEntry = this.pushEntry.bind(this);
        this.add = this.add.bind(this);
    }

    pushEntry(entry) {
        let newEntries = this.state.entries.slice();
        // let newEntry = Object.assign({index: newEntries.length}, entry);
        if (entry.index != null) {
            newEntries[entry.index] = entry;
        }
        else {
            newEntries.push(entry);
        }
        
        this.setState(Object.assign(this.state, { entries: newEntries }));

        return this.state.entries.length;
    }

    add() {
        const type = this.props.type;
        let entry = {};

        if (type === 'personal') {
            entry = {
                "Name": '',
                "Email": '',
                "Phone": ''
            };
        }
        else if (type === 'education') {
            entry = {
                "School name": '',
                "Title of study": '',
                "Date of study": ''
            };
        }
        else if (type === 'work') {
            entry = {
                "Company name": '',
                "Position title": '',
                "Main tasks of your job": '',
                "Date from and until when you worked": ''
            };
        }
        
        entry.index = this.state.entries.length;
        this.pushEntry(entry);
    }

    render() {
        const title = this.props.children;
        const {add, type} = this.props;
        
        return (
            <section>
                <h1>{title}</h1>

                { type == 'personal' ?                     
                        <Entry 
                            key={0} 
                            index={0} 
                            type={type} 
                            info={{
                                "Name": '',
                                "Email": '',
                                "Phone": ''
                            }}
                            pushEntry={this.pushEntry}
                        /> 
                    : 
                    this.state.entries.map( entry => 
                        <Entry 
                            key={entry.index} 
                            index={entry.index} 
                            type={type} 
                            info={entry} 
                            pushEntry={this.pushEntry}
                        /> 
                )}

                {/* <Entry 
                    key={this.state.entries.length}
                    type={type}
                    pushEntry={this.pushEntry} 
                    /> */}
                
                { add && <button onClick={this.add}>Add</button> }
            </section>
        );
    }
}