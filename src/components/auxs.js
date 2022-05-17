import React, { Component } from "react";
import "animate.css";
import Container from "./container/container";
import "./auxs.scss";
import Adding from "./adding/adding";
import ShowingCard from "./showing/showing";
class auxs extends Component {
  constructor() {
    super();
    this.state = {
      person: [{}],
      newArr: [],
      sample: {
        firstname: "",
        LastName: "",
        Number: "",
        Categories: "",
      },
    };
  }

  filterFunc = (e) => {
    if (e.target.value === "All") {
      this.setState({
        newArr: [...this.state.person],
      });
    } else {
      this.setState({
        newArr: [
          ...this.state.person.filter((el) => el.Categories == e.target.value),
        ],
      });
    }
  };

  render() {
    const changeObj = (e) => {
      let obj = {};
      if (e.target.id === "name") {
        obj.firstname = e.target.value;
      }
      if (e.target.id === "lastName") {
        obj.lastName = e.target.value;
      }
      if (e.target.id === "Number") {
        obj.Number = e.target.value;
      }
      if (e.target.id === "select") {
        obj.Categories = e.target.value;
        obj.id = this.state.person[this.state.person.length - 1].id + 1;
      }

      this.setState({ sample: { ...this.state.sample, ...obj } });
    };
    const submitted = (e) => {
      this.setState({
        person: [...this.state.person, { ...this.state.sample }],
      });
      this.setState({ newArr: [...this.state.person] });
      console.log(this.state.newArr);
    };

    return (
      <Container>
        <div className="components-container">
          <Adding
            changeObj={() => changeObj}
            submitted={() => submitted}
          ></Adding>
          <div className="filter-con">
            <select
              className="form-select"
              onChange={this.filterFunc}
              id="filter"
            >
              <option defaultValue value="All">
                All
              </option>
              <option value="Web developer">Web developer</option>
              <option value="android developer">android developer</option>
              <option value="desctop developer">desctop developer</option>
            </select>
            <ShowingCard newArr={this.state.newArr} />
          </div>
        </div>
      </Container>
    );
  }
}

export default auxs;
