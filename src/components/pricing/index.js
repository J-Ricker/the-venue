import React, { Component } from 'react'
import Mybtn from '../utils/mybtn';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        descriptions: [
            'Contrary to popular belief, Lorem Ipsum is not simply random text, and 1.10.33 of "de Finibus Bonorum et Malorum.',
            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more.',
            'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil).'
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.descriptions[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <Mybtn
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
        <div>
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                        <div className="pricing_wrapper">
                            {this.showBoxes()};
                        </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Pricing;