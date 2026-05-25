import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'
import { Button, Modal } from 'react-bootstrap'

function EmployeeTable(props) {
    // GET THE URL
    const { search } = useLocation()

    // GET THE PARAMETERS FROM THE URL
    const query = new URLSearchParams(search)

    // GET THE 'EMPLOYED' PARAMETER SPECIFICALLY
    const q = query.get('employed')

    const employeeRows = props.employees
        .filter(employee =>
            (q ? String(employee.currentlyEmployed) === q : true)
        )
        .map(employee =>
            <EmployeeRow
                key={employee._id}
                employee={employee}
                deleteEmployee={props.deleteEmployee}
            />
        )

    return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed?</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}

class EmployeeRow extends React.Component {
    constructor() {
        super()

        this.state = {
            modalVisible: false
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    onDeleteClick() {
        this.props.deleteEmployee(this.props.employee._id)
        this.toggleModal()
    }

    render() {
        return (
            <tr>
                <td>
                    <Link to={`/edit/${this.props.employee._id}`}>
                        Edit
                    </Link>
                </td>

                <td>{this.props.employee.name}</td>

                <td>{this.props.employee.extension}</td>

                <td>{this.props.employee.email}</td>

                <td>{this.props.employee.title}</td>

                <td>
                    {this.props.employee.dateHired.toDateString()}
                </td>

                <td>
                    {this.props.employee.currentlyEmployed
                        ? 'Yes'
                        : 'No'}
                </td>

                <td>
                    <Button
                        variant="danger"
                        onClick={this.toggleModal}
                    >
                        X
                    </Button>

                    <Modal
                        show={this.state.modalVisible}
                        onHide={this.toggleModal}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Delete Employee?
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            Are you sure you want to delete this employee?
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="success"
                                onClick={this.toggleModal}
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="danger"
                                onClick={this.onDeleteClick}
                            >
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
            </tr>
        )
    }
}

export default class EmployeeList extends React.Component {
    constructor() {
        super()

        this.state = {
            employees: []
        }

        this.createEmployee = this.createEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        fetch('/api/employees')
            .then(response => response.json())
            .then(data => {
                console.log(
                    'Total count of employees:',
                    data.count
                )

                data.employees.forEach(employee => {
                    employee.dateHired = new Date(employee.dateHired)
                })

                this.setState({
                    employees: data.employees
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    createEmployee(employee) {
        fetch('/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee),
        })
            .then(response => response.json())
            .then(newEmployee => {

                newEmployee.employee.dateHired =
                    new Date(newEmployee.employee.dateHired)

                const newEmployees =
                    this.state.employees.concat(newEmployee.employee)

                this.setState({
                    employees: newEmployees
                })

                console.log(
                    'Total count of employees:',
                    newEmployees.length
                )
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteEmployee(id) {
        fetch(`/api/employees/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    console.log('Failed to delete employee.')
                } else {
                    this.loadData()
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    Employee Management Application
                </h1>

                <EmployeeFilter />

                <hr />

                <EmployeeTable
                    employees={this.state.employees}
                    deleteEmployee={this.deleteEmployee}
                />

                <hr />

                <EmployeeAdd
                    createEmployee={this.createEmployee}
                />
            </React.Fragment>
        )
    }
}