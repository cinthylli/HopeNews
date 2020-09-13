import React from 'react'
import { Container } from 'semantic-ui-react';

export default function Fatal({ message }) {
    return (
        <Container textAlign='center'>
            <img src="https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png" alt="Error 404" />
            {message}
        </Container>
    )
}
