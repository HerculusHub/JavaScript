const employees = [
    { id: 1, name: "John Doe", position: "Manager" },
    { id: 2, name: "Jane Smith", position: "Developer" },
    { id: 3, name: "Sam Johnson", position: "Designer" },
    { id: 4, name: "Hello World", position:"Test"}
];

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// React component
function EmployeeList() {
    return (
        <ul>
            {employees.map(emp => (
                <li key={emp.id}>
                    {emp.name} - {emp.position}
                </li>
            ))}
        </ul>
    );
}

// Render component
root.render(<EmployeeList />);