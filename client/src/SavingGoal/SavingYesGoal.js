import React from 'react'

class SavingYesGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avgSavings: null,
            months:null
        }
    }

    componentDidMount() {
        var url = "/avg"
        var data = {
            accountId:74,
            savingsAmount:this.props.goalAmount,
            targetDuration:this.props.goalPeriod
        }
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()) // parses JSON response into native Javascript objects 
        .then(resp => {
            this.setState({
                avgSavings:resp["Average Savings"],
                months: resp["Number of Months needed"]
            })
        }).catch(err => {
            alert(err)
        })
    }
    render() {
        return (
            <div style={{padding:`10px 40px`, backgroundColor:`white`,borderRadius:5, width:`calc(100vw - 100px)`, margin:`20px auto auto auto`, height:400, paddingBottom:20,boxShadow:`0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)`,}}>
                <h2 style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`24px`, fontWeight:`300`}}>Your Saving Goal</h2>
                <div style={{display:`flex`, justifyContent:`space-around`, flexDirection:`column`}}>
                    <span style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`16px`, fontWeight:`300`}}>Goal Reason: {this.props.goalName}</span>
                    <span style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`16px`, fontWeight:`300`}}>Goal Amount: {this.props.goalAmount}</span>
                    <span style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`16px`, fontWeight:`300`}}>Goal Period: {this.props.goalPeriod} months</span>
                </div>
                <div>
                    With your current Savings of <b>${Math.round(this.state.avgSavings * 100) / 100}</b>, you would be able to fulfill within <b>{this.state.months}</b> months!
                </div>
            </div>
        );
    }
}

export default SavingYesGoal;