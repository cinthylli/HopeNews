import React, { Component } from 'react'
import { Icon, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as newsActions from '../actions/newsActions'
class MenuApp extends Component {
    state = { activeItem: 'gamepad' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu icon='labeled'  >

                <Menu.Item
                    as={Link}
                    to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='home' color='teal' />
          Home
        </Menu.Item >

                <Menu.Item
                    as={Link}
                    to='/politics'
                    name='briefcase'
                    active={activeItem === 'briefcase'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='briefcase' color='teal' />
          Politics
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/international'
                    name='world'
                    active={activeItem === 'world'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='world' color='teal' />
          International
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/sports'
                    name='futbol'
                    active={activeItem === 'futbol'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='futbol' color='teal' />
          Sport
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/design'
                    name='picture'
                    active={activeItem === 'picture'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='picture' color='teal' />
          Design
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/technology'
                    name='computer'
                    active={activeItem === 'computer'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='computer' color='teal' />
          Technology
        </Menu.Item>
                <Menu.Item position='right'>

                    <Menu.Menu position='right' >
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input'>
                                <input
                                    className='prompt'
                                    type='text'
                                    placeholder='Search keyword ...'
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        this.props.guardarBusqueda({ search : e.target.value })
                                    }}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            this.props.traerBusqueda( { search : e.target.value })
                                        }
                                    }}

                                />
                            </div>
                            <div className='results' />
                        </div>
                        <Button  color='teal'  onClick={
                            () => {
                                this.props.traerBusqueda({ search : this.props.search })
                            }
                        }>Search</Button>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}

const mapStateToProps = (reducers) => {
    return reducers.newsReducer;
}


export default connect(mapStateToProps, newsActions)(MenuApp);