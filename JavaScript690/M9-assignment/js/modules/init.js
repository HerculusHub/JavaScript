export async function getEmployees() {
    try {
        const response = await fetch('../data/employees.json')
        
        if (!response.ok) {
            throw new Error('Failed to load employee data')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Error fetching employees:', error)
        return []
    }
}