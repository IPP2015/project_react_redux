import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../component/backcomponent";
import { connect } from "react-redux";
import FormComponent from "../component/formcomponent";
import { getUserview, getUseredit } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class Edituser extends Component {
  componentDidMount() {
    this.props.dispatch(getUserview(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(getUseredit(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Updated!",
          "Nama : " +
            this.props.getResponDataUser.nama +
            " , Umur : " +
            this.props.getResponDataUser.umur,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(Edituser);