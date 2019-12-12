import { Connection, createConnection } from 'mysql'

export const GetDatabase: TGetDataBase = () =>
  createConnection({
    database: 'employees',
    host: 'localhost',
    password: '123456',
    user: 'root'
  })

export const GetEmployeeById: TGetEmployeeById = (id, connectionDb) => {
  return new Promise((resolve, reject) => {
    connectionDb.query(
      `select * from employees where emp_no = ${id};`,
      (error, results: IEmployee[]) => {
        error ? reject(error) : resolve(results[0])
      }
    )
  })
}

export const GetEmployeeBirthDate: TGetEmployeeBirthDate = employee =>
  employee.birth_date

export default {
  GetDatabase,
  GetEmployeeBirthDate,
  GetEmployeeById
}

interface IEmployee {
  emp_no: number
  birth_date: Date
  first_name: string
  last_name: string
  gender: string
  hire_date: Date
}

type TGetDataBase = () => Connection
type TGetEmployeeById = (
  id: number,
  connectionDb: Connection
) => Promise<IEmployee>
type TGetEmployeeBirthDate = (employee: IEmployee) => Date
