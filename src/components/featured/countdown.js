import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';


export default class countdown extends Component {
    state = {

    }

    render() {
        return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts In
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            2
                        </div>
                        <div className="countdown_tag">
                            HS
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            20
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            40
                        </div>
                        <div className="countdown_tag">
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        )
    }
}