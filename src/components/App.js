import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import * as action from '../actions/actions';

class App extends React.Component {

    state = {
        volume: 0,
    }

    componentDidMount() {
        this.props.requestCurrency()
    }

    changeVolume = (e) => {
        if (Number.isInteger(+e.target.value) && e.target.value) {
            this.setState({ volume: e.target.value });
        }
        else this.setState({ volume: 0 });
    }

    setActiveCurrency = (e) => {
        this.props.onChangeCurrency(e.target.name);
    }


    render() {
        return (
            <div>
                <h1>Bitcoin</h1>
                <div>
                    <span>USD:</span> <span>{this.props.allCurrencies.USD}</span>
                </div>
                <div>
                    <span>RUB:</span> <span>{this.props.allCurrencies.RUB}</span>
                </div>
                <div>
                    <span>UAH:</span> <span>{this.props.allCurrencies.UAH}</span>
                </div>

                <label>Volume</label>
                <input onChange={(e) => this.changeVolume(e)} type="text"></input>
                <button name="USD" onClick={(e) => this.setActiveCurrency(e)}>USD</button>
                <button name="RUB" onClick={(e) => this.setActiveCurrency(e)}>RUB</button>
                <button name="UAH" onClick={(e) => this.setActiveCurrency(e)}>UAH</button>

                <p>{this.state.volume} BTC will be {this.state.volume * this.props.allCurrencies[this.props.selectedCurrency]} in {this.props.selectedCurrency} </p>
            </div >
        )
    }

}

const mapStateToProps = state => ({
    allCurrencies: state.allCurrencies,
    selectedCurrency: state.selectedCurrency
})

const mapDispatchToProps = dispatch => ({
    onChangeCurrency: (activeCurrency) => dispatch(action.onChangeCurrency(activeCurrency)),
    requestCurrency: () => dispatch(action.requestCurrency())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);