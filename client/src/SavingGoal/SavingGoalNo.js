import React from 'react';

const SavingGoalNo = ({onClick}) => (
    <div style={{padding:`10px 40px`, backgroundColor:`white`,borderRadius:5, width:`calc(100vw - 100px)`, margin:`20px auto auto auto`, height:400, paddingBottom:20,boxShadow:`0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)`}}>
        <h2 style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`24px`, fontWeight:`300`}}>Your Saving Goal</h2>

        <a style={{margin:`auto`, width:`90%`, height:`80%`, border:`2px dashed gray`, display:`flex`, justifyContent:`center`, alignItems:`center`, cursor:`pointer`}} className="modal-trigger" href="#modal1">
            Enter Saving Goal
        </a>
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>Enter Your Saving Goals</h4>
                <input className="goalName" type="text" placeholder="Enter what you're saving for"/>
                <input className="goalAmount" type="number" min="1" placeholder="Enter Amount"/>
                <input className="goalPeriod" type="number" placeholder="Enter expected saving period (in Months)"/>
            </div>
            <div className="modal-footer">
                <div href="#" className="waves-effect waves-green btn-flat" style={{background:`#28a745`, color:`white`}} onClick={onClick}>Save</div>
                <div href="#!" className="modal-close waves-effect waves-green btn-flat" style={{background:`#28a745`, color:`white`}}>Close</div>
            </div>
        </div>
    </div>
)

export default SavingGoalNo