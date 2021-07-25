import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return ( <
            div >
            <
            Link to = '/signup' > S 'inscrire</Link> <
            Link to = '/login' > Se connecter < /Link> <
            Link to = '/auth' > Mon profil < /Link>

            <
            /div>
        )
    }
}