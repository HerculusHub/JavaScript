"use strict";

var employees = [{ id: 1, name: "John Doe", position: "Manager" }, { id: 2, name: "Jane Smith", position: "Developer" }, { id: 3, name: "Sam Johnson", position: "Designer" }, { id: 4, name: "Hello World", position: "Test" }];

// Create root
var root = ReactDOM.createRoot(document.getElementById("root"));

// React component
function EmployeeList() {
    return React.createElement(
        "ul",
        null,
        employees.map(function (emp) {
            return React.createElement(
                "li",
                { key: emp.id },
                emp.name,
                " - ",
                emp.position
            );
        })
    );
}

// Render component
root.render(React.createElement(EmployeeList, null));