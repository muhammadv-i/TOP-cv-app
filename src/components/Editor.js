import React, { Component } from 'react';

export default class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = props.entry.state;

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, e) {
        let newState = Object.assign({}, this.state); 
        newState.info[key] = e.target.value;

        this.setState( newState );
    }

    handleSave(e) {
        const entry = this.props.entry;
        const newEntryInfo = {info: this.state.info, isEditing: false};
        
        entry.setState(Object.assign(entry.state, newEntryInfo));
        this.props.pushEntry(entry.state.info);
    }

    render() {
        const { info } = this.state;

        const items = [];
        for (const [key, val] of Object.entries(info)) {
            if (key !== 'index') {
                items.push(
                    <div key={key}>
                        <label htmlFor={key} name={key}><h3>{key}</h3></label>
                        <input type="text" onChange={ ((e) => this.handleChange(key, e)) } value={val} required/>
                    </div>
                )
            }
        }
        
        return (
            <form onSubmit={this.handleSave}>
                {items}
                <button type="submit">Save</button>
            </form>
        );
    }
}