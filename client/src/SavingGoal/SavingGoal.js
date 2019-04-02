import React, {Component} from 'react';
import M from 'materialize-css'
import SavingGoalNo from './SavingGoalNo';
import SavingYesGoal from './SavingYesGoal';
class SavingGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goalName: null,
            goalAmount: null,
            goalPeriod: null,
        }
    }

    componentDidMount() {
        var lems = document.querySelectorAll('.modal');
        M.Modal.init(lems);
    }

    handleClick = () => {
        var goalName = document.querySelector(".goalName").value;
        var goalAmount = parseInt(document.querySelector(".goalAmount").value);
        var goalPeriod = parseInt(document.querySelector(".goalPeriod").value);

        if(!goalName || !goalAmount || !goalPeriod) {
            alert("Please Enter All Inputs!")
        } else {
            this.setState({goalName, goalAmount, goalPeriod})
            alert("Saved!")
        }
    }

    render() {
        const {goalName, goalAmount, goalPeriod} = this.state;
        return (
            <div>
                {(!goalName || !goalAmount || !goalPeriod) ? <SavingGoalNo onClick={this.handleClick} /> : <SavingYesGoal goalAmount={this.state.goalAmount} goalName={this.state.goalName} goalPeriod={this.state.goalPeriod}/>}
            </div>
        );
    }
}

export default SavingGoal;