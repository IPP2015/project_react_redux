import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "NAMA",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "ALAMAT",
    sort: true,
  },
  {
    dataField: "link",
    text: "ACTION",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"view/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> View
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state /*ownProps*/) => {
  return {
    getUserlist: state.users.getUserlist,
    error: state.users.error
  }
}

const TableComponent = (props) => {
  return (
    <Container>
      { props.getUserlist ? (
      <ToolkitProvider
        keyField="id"
        data={props.getUserlist}
        columns={columns}
        bootstrap4
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            {" "}
            <Row>
              <Col>
                <Link to={"/create"}>
                  <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faUser} /> Create User
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="search .." />
                </div>
              </Col>
            </Row>
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider> ) :(
        <div className="text-center">
          {props.error ? (
            <h4>{props.error}</h4>
          ):(
            <Spinner color="dark"/>
          )}
        </div>
      )}
    </Container>
  );
};
export default connect(mapStateToProps, null) (TableComponent);
