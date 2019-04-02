import React, {Component} from 'react';

class RecentTransact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentTransactions:null
        }
    }

    componentDidMount() {
        var url = "/topTransactions"
        var data = {
            accountId:74,
            numOfTxn:5
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
                recentTransactions:resp
            },() => this.updateTable())
        }).catch(err => {
            alert(err)
        })
    }

    updateTable = () => {
        var txns = this.state.recentTransactions;
        for(var i = txns.length - 1; i >= 0; i--) {
            let obj = txns[i];
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            
            var date = (obj['date'])
            var newdate = date.substring(0, date.indexOf("T"))
            var time = date.substring(date.indexOf("T") + 1, date.indexOf('.'))
            td1.innerText = newdate +" "+ time;
            var space = obj['referenceNumber'].indexOf(" ");
            td2.innerText = obj['referenceNumber'].substring(space+1);
            td3.innerText = "$" + obj['amount']

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            document.getElementById("tbody").appendChild(tr);
        }
    }

    render() {
        return (
            <section style={{width:`100%`, height:`100%`, gridColumn:`2/3`, gridRow:`2/3`, boxSizing:`border-box`, backgroundColor:`white`,borderRadius:5}}>
                <div className="card" style={{margin:0, height:`100%`, borderRadius:5}}>
                    <div className="card-content">
                        <span className="card-title">Recent Transactions</span>
                        <table id="rtxnTable">
                            <tbody id="tbody">
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default RecentTransact;