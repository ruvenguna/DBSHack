import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class TopCategory extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data:null
        }
    }

    componentDidMount() {
        var url = "/topCat"
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
            resp.forEach(cate => {
                var obj = {}
                obj["name"] = cate[0];
                obj["value"] = cate[1];
                console.log(obj);
                list.push(obj)
            })
            this.setState({
                data:list
            })
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        return (
            <section style={{width:`100%`, height:`100%`, gridColumn:`1/2`, gridRow:`2/3`, boxSizing:`border-box`, backgroundColor:`white`,borderRadius:5}}>
                <div className="card" style={{margin:0, height:`100%`, borderRadius:5}}>
                    <div className="card-content">
                        <span className="card-title">Top 3 Spending Categories</span>
                        <BarChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopCategory;