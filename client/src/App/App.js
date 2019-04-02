import React, { Component } from 'react';
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import SavingGoal from '../SavingGoal/SavingGoal'
import SpendingTrend from '../SpendingTrend/SpendingTrend'

class App extends Component {



    render() {
        return (
        <div className="App" style={{background:`whitesmoke`}}>
            <Header />
            <Landing />
            <SpendingTrend />
            <SavingGoal />
        </div>
        );
    }
}

export default App;
