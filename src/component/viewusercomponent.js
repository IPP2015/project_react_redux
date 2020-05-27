import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserview: state.users.getUserview,
    errorUserview: state.users.errorUserview,
  };
};

const ViewUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserview.nama}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props.getUserview.alamat}</td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td>{props.getUserview.umur}</td>
        </tr>
        <tr>
          <td width="200">No HP</td>
          <td width="10">:</td>
          <td>{props.getUserview.notlp}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(ViewUserComponent);