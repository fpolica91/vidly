import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <div>
        <h4>MovieForm</h4>
        <p>{match.params.id}</p>
        <button onClick={() => history.push("/")} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
