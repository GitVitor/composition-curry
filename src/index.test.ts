import {
  GetDatabase,
  GetEmployeeBirthDate,
  GetEmployeeById
} from './compositions'
import employees from './mock'

describe('should test each function', () => {
  it('should get databaseConnection', () => {
    const retrieve = GetDatabase()
    expect(retrieve).not.toBeUndefined()
  })

  it('should get employee by id', async () => {
    const [employeeId] = employees
    const connectionDb = GetDatabase()
    const employee = await GetEmployeeById(employeeId, connectionDb)
    expect(employee.emp_no).toBe(employeeId)
  })

  it('should get employee birth date', async () => {
    const [employeeId] = employees
    const connectionDb = GetDatabase()
    const employee = await GetEmployeeById(employeeId, connectionDb)
    const birthDate = GetEmployeeBirthDate(employee)
    expect(birthDate.toDateString()).toBe('Wed Sep 02 1953')
  })
})
