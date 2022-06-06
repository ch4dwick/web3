import "./App.css";
import React from "react";
import Web3 from "web3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: new Web3("ws://127.0.0.1:7545"),
      accounts: null,
    };
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts() {
    this.state.web3.eth
      .getAccounts()
      .then((res) => {
        this.setState({
          accounts: res,
        });
      })
      .catch(console.log);
  }

  render() {
    const accounts = this.state.accounts;
    var addresses;
    if (accounts) {
      addresses = accounts.map((account, key) => {
        return <li key={key}>{account}</li>;
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          Accounts:
          <ul className="App-body">{addresses}</ul>
        </header>
      </div>
    );
  }
}

export default App;
