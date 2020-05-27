import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../component/backcomponent";
import FormComponent from "../component/formcomponent";
import { connect } from "react-redux";
import { getUsercreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class Createuser extends Component {
  handleSubmit(data) {
    this.props.dispatch(getUsercreate(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.errorResponDataUser)
      {
        swal(
            "Failed!",
            this.props.errorResponDataUser,
            "error"
          );
      }else {
        swal(
            "User Created!",
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
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(Createuser);