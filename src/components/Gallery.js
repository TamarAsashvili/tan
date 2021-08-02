import React from 'react';
import '../css/main.css';
import { Container } from 'react-bootstrap';
import HomeScreen from './HomeScreen'
import Header from './UI/Header'


export default function Gallery() {
    return (
        <div>
            <Header />
            <Container>
                <HomeScreen />
            </Container>
        </div>
    );
}
