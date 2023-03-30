import React, { Component } from 'react';
import './styles/App.css';
import Section from './components/Section.js';

export default class App extends Component {
    render() {
        return (
            <>
                <Section add={false}>Personal Information</Section>
                <Section add={true}>Education</Section>
                <Section add={true}>Work Experience</Section>
            </>
        );
    }

}