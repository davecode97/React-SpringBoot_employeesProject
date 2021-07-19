import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponet extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId
        };
        
        console.log('employee => ' + JSON.stringify(employee));
        
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({emailId : event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                            <div className="card-body">
                                <div className="card-header text-center">
                                    <h2 className="h3">Add Employee</h2>
                                </div>
                                <br />
                                <form>
                                    <div className="form-group">
                                        <label className="">First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mt-2">Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mt-2">Email Address: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <br />
                                    <div className="card-footer">
                                        <button className = "btn btn-primary" onClick={this.saveEmployee}>Save</button>
                                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style= {{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponet;