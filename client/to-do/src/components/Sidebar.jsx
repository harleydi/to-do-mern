import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FormatListBulleted, LabelImportant, Person, Settings } from '@material-ui/icons';
import Home from '../Pages/Home'
import './sidebar.css'

export default class Sidebar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebarHeader'>
                    <h1>Task-it</h1>
                </div>
                <div className='sidebarNavigation'>
                    <p>navigation</p>
                    <div className="box">
                        <Link to='/' className='navLink'>
                            <FormatListBulleted />
                            <h3 className='link'>Tasks</h3>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to='/' className='navLink'>
                            <LabelImportant />
                            <h3 className='link'>Important</h3>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to='/profile' className='navLink'>
                            <Person />
                            <h3 className='link'>Profile</h3>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to='/settings' className='navLink'>
                            <Settings />
                            <h3 className='link'>Settings</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
