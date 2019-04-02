import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class SpendingTrend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        var url = "/savings"
        var data = {
            accountId:74
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
            var list = []
            for (var key in resp) {
                if (resp.hasOwnProperty(key)) {
                    var temp = {}
                    temp["name"] = key;
                    temp["value"] = resp[key]
                    list.push(temp);
                }
            }
            this.setState({
                data:list
            })
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        return (
            <div style={{padding:`10px 40px`, backgroundColor:`white`,borderRadius:5, width:`calc(100vw - 100px)`, margin:`20px auto auto auto`, height:400, paddingBottom:20,boxShadow:`0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)`}}>
                <h2 style={{fontFamily:`-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,fontSize:`24px`, fontWeight:`300`}}>Your Saving Trend</h2>
        
                <LineChart width={1230} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            </div>
        )
    }
} 

export default SpendingTrend