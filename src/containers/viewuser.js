import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../component/backcomponent";
import { connect } from "react-redux";
import { getUserview } from "../actions/userAction";
import Viewcomponent from "../component/viewusercomponent";

class Viewuser extends Component {
  componentDidMount() {
    this.props.dispatch(getUserview(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User</h1>
        <Viewcomponent/>
      </Container>
    );
  }
}

export default connect()(Viewuser);