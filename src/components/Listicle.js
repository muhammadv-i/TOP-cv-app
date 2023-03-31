import React, { Component } from 'react';

export default class Listicle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info } = this.props;

        const items = [];
        for (const [key, val] of Object.entries(info)) {
            if (key !== 'index') {
                items.push(
                    <div key={key}>
                        <h3>{key}</h3>
                        <p>{val}</p>
                    </div>
                )
            }
        }

        return (
            <>
                {items}
            </>
        );
    }
}