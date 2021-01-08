import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './Homepage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <HomePage/>
                <RoomJoinPage/>
                <CreateRoomPage/>
            </div>
        )
}

appDiv = document.getElementById('app');
render(<App name='sk'/>,appDiv);