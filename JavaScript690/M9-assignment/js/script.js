// IMPORT MODULE
import { getEmployees } from './modules/init.js'

// GET DOM ELEMENTS
const empTable = document.querySelector('#employees')
const empCount = document.querySelector('#empCount')

// INITIALIZE APP (ASYNC LOAD)
async function init() {
    const employees = await getEmployees()
    buildGrid(employees)
}

init()

// DELETE EMPLOYEE (UI ONLY — NO DATA SOURCE UPDATE)
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            empTable.deleteRow(rowIndex)

            // Update employee count after deletion
            let currentCount = empTable.rows.length - 1 // subtract header row
            empCount.value = `(${currentCount})`
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE EXISTING TBODY (IF ANY)
    if (empTable.lastElementChild) {
        empTable.lastElementChild.remove()
    }

    // CREATE NEW TBODY
    let tbody = document.createElement('tbody')

    // LOOP THROUGH EMPLOYEES (OBJECTS NOW)
    for (let employee of employees) {
        tbody.innerHTML += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }

    // APPEND TO TABLE
    empTable.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${employees.length})`
}