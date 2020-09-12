import React from 'react'
import { Container } from 'semantic-ui-react';

export default function Fatal({ message }) {
    return (
        <Container textAlign='center'>
            {message}
            <img src="../../img/e404.jpg" alt="Error 404" />
            <cite><a href='https://www.freepik.es/vectores/fondo'>Vector de Fondo creado por freepik - www.freepik.es</a></cite>
        </Container>
    )
}
