import React, {Component} from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableAmount:null
        }
    }

    render() {
        return (
            <section style={{width:`100%`, height:`100%`, gridColumn:`1/2`, gridRow:`1/2`, boxSizing:`border-box`, backgroundColor:`white`,borderRadius:5}}>
                <div className="card" style={{margin:0, height:`100%`, borderRadius:5}}>
                </div>
            </section>
        )
    }
}

export default Intro;