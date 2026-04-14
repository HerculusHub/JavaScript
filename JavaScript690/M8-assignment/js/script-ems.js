// CREATE AN ARRAY OF EMPLOYEES
const STORAGE_KEY = "employees5";

let employees5 = [
    { id: 10000001, name: "John Smith", extension: 1001, email: "john.smith@company.com", department: "Engineering" },
    { id: 10000002, name: "Jane Doe", extension: 1002, email: "jane.doe@company.com", department: "Marketing" },
    { id: 10000003, name: "Michael Brown", extension: 1003, email: "michael.brown@company.com", department: "Sales" },
    { id: 10000004, name: "Emily Davis", extension: 1004, email: "emily.davis@company.com", department: "QA" },
    { id: 10000005, name: "Chris Wilson", extension: 1005, email: "chris.wilson@company.com", department: "Administrative" }
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

let storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
    employees5 = JSON.parse(storedData);
}


// GET DOM ELEMENTS

const form = document.getElementById("addForm");
const empTable = document.getElementById("empTable");
const empCount = document.getElementById("empCount");

const id = document.getElementById("id");
const name = document.getElementById("name");
const extension = document.getElementById("extension");
const email = document.getElementById("email");
const department = document.getElementById("department");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
     e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const newEmployee = {
        id: Number(id.value),
        name: name.value,
        extension: Number(extension.value),
        email: email.value,
        department: department.value
    };

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees5.push(newEmployee);


    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
     if (e.target.classList.contains("btn-delete")) {

        if (confirm("Delete this employee?")) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const row = e.target.closest("tr");
        const index = row.dataset.index;

        // REMOVE EMPLOYEE FROM ARRAY
        employees5.splice(index, 1);

        // BUILD THE GRID
        buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const oldTbody = empTable.querySelector("tbody");
    oldTbody.remove();


    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement("tbody");

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employees5.forEach((emp, index) => {

        const tr = document.createElement("tr");
        tr.dataset.index = index;

        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.extension}</td>
            <td>${emp.email}</td>
            <td>${emp.department}</td>
            <td><button class="btn btn-danger btn-delete">Delete</button></td>
        `;

        tbody.appendChild(tr);
    });

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = employees5.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("emplyees5", JSON.stringify(employees5));

};