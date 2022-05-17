import { Component } from "react";
import "./adding.scss";

class adding extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="adding-container">
        <div className="adding-inputs-container">
          <div className="input-divs">
            <label>First Name</label>
            <input
              type="text"
              className="adding-input"
              placeholder="first name"
              id="name"
              onChange={this.props.changeObj(Event)}
            />
          </div>
          <div className="input-divs">
            <label>Last Name</label>
            <input
              type="text"
              className="adding-input"
              placeholder="Last Name"
              id="lastName"
              onChange={this.props.changeObj(Event)}
            />
          </div>
          <div className="input-divs">
            <label>Number</label>
            <input
              type="number"
              className="adding-input"
              placeholder="tel: "
              id="Number"
              onChange={this.props.changeObj(Event)}
            />
          </div>
          <div className="input-divs">
            <label>Categories</label>
            <select
              className="adding-input"
              id="select"
              onChange={this.props.changeObj(Event)}
            >
              <option defaultValue>Categories</option>
              <option value="Web developer">Web developer</option>
              <option value="android developer">android developer</option>
              <option value="desctop developer">desctop developer</option>
            </select>
          </div>
        </div>

        <button className="btn" id="btn" onClick={this.props.submitted(Event)}>
          Submit
        </button>
      </div>
    );
  }
}

export default adding;
