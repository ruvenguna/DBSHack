import React, {Component} from 'react';

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableAmount:null
        }
    }

    componentDidMount() {
        var url = "/balance"
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
            this.setState({
                availableAmount:resp.availableBalance
            })
        }).catch(err => {
            alert(err)
        })
    }


    render() {
        return (
            <section style={{width:`100%`, height:`100%`, gridColumn:`2/3`, gridRow:`1/2`, boxSizing:`border-box`, backgroundColor:`white`,borderRadius:5}}>
                <div className="card" style={{margin:0, height:`100%`, borderRadius:5}}>
                    <div className="card-content" style={{ height:`100%`, position:`relative`}}>
                        <span className="card-title">Your Available Balance</span>
                        <span style={{fontSize:40, margin:`auto`, position:`absolute`, top:`50%`, left:`50%`, transform:`translate(-50%, -50%)`}}>${this.state.availableAmount ? this.state.availableAmount : null}</span>
                        <div style={{position:`absolute`, bottom:`5%`, right:`5%`, width:`150px`, height:`50px`, background:`#007bff`, color:`white`, borderRadius:`.25rem`, display:`flex`, justifyContent:`center`, alignItems:`center`, cursor:`pointer`, boxShadow:`0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)`}}>Top up PayLah</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Balance;