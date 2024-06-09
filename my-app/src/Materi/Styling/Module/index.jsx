import React from "react";
import style from './index.module.css';

export default class Module extends React.Component {
    render() {
        return (
            <div>
                <center>
                <button className={`${style.btn} ${style.info}`}>Mission Stato</button>
                </center>
            </div>
        )
    }
} 