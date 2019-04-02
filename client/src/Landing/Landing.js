import React, {Component} from 'react';
import Balance from '../Balance/Balance';
import TopCategory from '../TopCategory/TopCategory';
import RecentTransact from '../RecentTransact/RecentTransact';
import Intro from '../Intro/Intro';

class Landing extends Component {
    render() {
        return (
            <main style={{height:`calc(100vh - 64px)`,padding:`0px 40px`, boxSizing:`border-box`, display:`flex`, justifyContent:`center`, alignItems:`center`}}>
                <div style={{width:`100%`, height:`95%`, display:`grid`, gridTemplateColumns:`1fr 1fr`, gridTemplateRows:`1fr 1fr`, gridGap:`30px`}}>
                    <Intro />
                    <Balance />
                    <TopCategory />
                    <RecentTransact />
                </div>
            </main>
        );
    }
}

export default Landing;