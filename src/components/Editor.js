import React, { Component } from 'react';

export default class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = props;

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, e) {
        let newState = Object.assign({}, this.state); 
        newState.info[key] = e.target.value;

        this.setState( newState );

        console.log(newState.info);
    }

    handleSave(e) {
        console.log(this.state);
        const parent = this.state.parent;
        
        parent.setState(Object.assign(parent.state, {info: this.state.info, isEditing: false}));
    }

    render() {
        const { info } = this.state;

        const items = [];
        for (const [key, val] of Object.entries(info)) {
            items.push(
                <div key={key}>
                    <label htmlFor={key} name={key}><h3>{key}</h3></label>
                    <input type="text" onChange={ ((e) => this.handleChange(key, e)) } value={val} />
                </div>
            )
        }

        return (
            <>
                {items}
                <button onClick={this.handleSave}>Save</button>
            </>
        );
    }
}