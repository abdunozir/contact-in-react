import React, { Component } from "react";
import Container from "./container/container";
import "./auxs.scss";
import Adding from "./adding/adding";
import ShowingCard from "./showing/showing";
class auxs extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        {
          firstname: "abdunozir",
          LastName: "abduvaliyev",
          Number: "+998990044042",
          Categories: "Web developer",
        },
      ],
      sample: {
        firstname: "",
        LastName: "",
        Number: "",
        Categories: "",
      },
    };
  }
  render() {
    const changeObj = (e) => {
      // console.log(e.target.id);
      let obj = {};
      if (e.target.id == "name") {
        obj.firstname = e.target.value;
      }
      if (e.target.id == "lastName") {
        obj.lastName = e.target.value;
      }
      if (e.target.id == "Number") {
        console.log(e.target);
        obj.Number = e.target.value;
      }
      if (e.target.id == "select") {
        obj.Categories = e.target.value;
      }

      this.setState({ sample: { ...this.state.sample, ...obj } });
    };
    const submitted = (e) => {
      this.setState({
        person: [...this.state.person, { ...this.state.sample }],
      });
    };

    return (
      <Container>
        <div className="components-container">
          <Adding
            changeObj={() => changeObj}
            submitted={() => submitted}
          ></Adding>
          <div className="filter-con">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>filter</option>
              <option value="Web developer">Web developer</option>
              <option value="android developer">android developer</option>
              <option value="desctop developer">desctop developer</option>
            </select>
            <ShowingCard person={this.state.person} />
          </div>
        </div>
      </Container>
    );
  }
}

export default auxs;
