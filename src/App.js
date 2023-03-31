import React, { Component } from 'react';
import './styles/App.css';
import Section from './components/Section.js';
import './styles/App.css';

export default class App extends Component {
    render() {
        return (
            <>
                <Section add={false} type="personal">Personal Information</Section>
                <Section add={true} type="education">Education</Section>
                <Section add={true} type="work">Work Experience</Section>
            </>
        );
    }

}