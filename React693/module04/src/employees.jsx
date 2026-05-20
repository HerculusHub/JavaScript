const initialEmployees = [
    {
        id: 1,
        name: 'Zak Ruvalcaba',
        ext: 1124,
        email: 'zak@vectacorp.com',
        title: 'Chief Executive Officer',
        dateHired: new Date('2018-08-15'),
        isEmployed: true,
    },
    {
        id: 2,
        name: 'Sally Smith',
        ext: 1125,
        email: 'sally@vectacorp.com',
        title: 'Director of Sales',
        dateHired: new Date('2015-01-03'),
        isEmployed: true,
    },
]

import React from 'react'
import { createRoot } from 'react-dom/client'

import EmployeeList from './EmployeeList.jsx'

const root = createRoot(document.getElementById('content'))


root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>, 
    )