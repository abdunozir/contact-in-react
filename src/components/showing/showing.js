import { Component } from "react";
import "./showing.scss";
class ShowingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="card-con">
        {this.props.person.map((person, i) => (
          //   console.log(person);
          <div className="card " key={i}>
            <div className="card-body">
              <h5 className="card-title">
                {person.firstname} {person.lastName}
              </h5>
              <p className="card-text">{person.Number}</p>
              <p className="btn btn-primary">{person.Categories}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowingCard;
