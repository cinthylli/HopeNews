import React, { Component } from 'react'
import { Icon, Menu, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class MenuExampleLabeledIcons extends Component {
    state = { activeItem: 'gamepad' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu icon='labeled'>

                <Menu.Item
                    as={Link}
                    to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='home' />
          Home
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/business'
                    name='briefcase'
                    active={activeItem === 'briefcase'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='briefcase' />
          Business
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/international'
                    name='world'
                    active={activeItem === 'world'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='world' />
          International
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/sports'
                    name='futbol'
                    active={activeItem === 'futbol'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='futbol' />
          Sport
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/design'
                    name='picture'
                    active={activeItem === 'picture'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='picture' />
          Design
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/technology'
                    name='computer'
                    active={activeItem === 'computer'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='computer' />
          Technology
        </Menu.Item>

                <Menu.Menu position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input'>
                            <input
                                className='prompt'
                                type='text'
                                placeholder='Search ...'
                            />
                            <i className='search link icon' />
                        </div>
                        <div className='results' />
                    </div>
                </Menu.Menu>
            </Menu>
        )
    }
}
