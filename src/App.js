import React, { Component } from "react";

import { EmpList } from "./components/emp-list/emp-list";

import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100&nat=us")
      .then((res) => res.json())
      .then((list) => this.setState({ employee: list.results }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { employee, searchField } = this.state;
    const filteredEmp = employee.filter(
      (filter) =>
        filter.name.first.toLowerCase().includes(searchField.toLowerCase()) ||
        filter.name.last.toLowerCase().includes(searchField.toLowerCase()) ||
        filter.email.toLowerCase().includes(searchField.toLowerCase()) ||
        filter.phone.includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="header">Employee Directory</h1>
        <h4 className="search-text">search by name, email or phone number</h4>
        <SearchBox handleChange={this.handleChange} />
        <EmpList employee={filteredEmp} />
      </div>
    );
  }
}

export default App;
