import {
  GetDatabase,
  GetEmployeeBirthDate,
  GetEmployeeById
} from './compositions'
import employees from './mock'

import imperative from './imperative'

xdescribe('should test each function', () => {
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

describe('should test imperative functions', () => {
  it('should get employee birth date', async () => {
    const birthDate = await imperative.GetEmployeeBirthDate()
    expect(birthDate).toBe('Wed Sep 02 1953')
  })
})
