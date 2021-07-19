import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
//rcc->enter
class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        // rest api
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount(){
        //promise
        EmployeeService.getEmployess().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-2">Employees List</h2>
                    <button className="btn btn-primary mb-4" onClick={this.addEmployee}>Add Employee</button>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={()=> this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=> this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;