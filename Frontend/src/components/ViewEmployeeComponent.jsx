import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.match.params.id, // syntax to get the id from browser url
            employee: {}
        }

    }

    cancel(){
        this.props.history.push('/employees');
    }

    componentDidMount(){
        // Make REST APIs call
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3 mt-3">
                    <div className="card-header text-center">
                     <h2 className="h3">Employee Details</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <label>First Name: { this.state.employee.firstName }</label>
                        </div>
                        <div className="row">
                            <label>Last Name: { this.state.employee.lastName }</label>
                        </div>
                        <div className="row">
                            <label>Email Address: { this.state.employee.emailId }</label>
                        </div>
                        <br />
                        <div className="card-footer">
                            <button className = "btn btn-info" onClick={this.cancel.bind(this)}>Return</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;