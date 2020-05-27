import React, {Component} from "react";
import Tablecomponent from "../component/tablecomponent"
import {connect} from "react-redux";
import {getUserlist} from "../actions/userAction";
import { Container } from "reactstrap";

class Homecontainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUserlist());
    }

    render() {
        return(
            <div>
                <Container>
                <Tablecomponent />
                </Container>
            </div>
        );
    }
}
export default connect()(Homecontainer)