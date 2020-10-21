import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1 className='homeTitle'>Welcome</h1>
                <div className="taskContainers">
                    <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div>
                    {/* <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div> */}
                    {/* <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div>
                    <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div>
                    <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div>
                    <div className="taskBox">
                        <AddIcon 
                            style={{
                                fontSize: '16rem'
                            }}
                        />
                    </div> */}
                </div>
            </div>
        )
    }
}
