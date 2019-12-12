import { createConnection } from 'mysql'

function GetEmployeeBirthDate() {
  return new Promise((resolve, reject) => {
    const connection = createConnection({
      database: 'employees',
      host: 'localhost',
      password: '123456',
      user: 'root'
    })

    connection.query(
      'select * from employees where emp_no = 10001;',
      (error, results) => {
        if (error) {
          reject(error)
        }

        const [employee] = results
        const employeeBirthDate = employee.birth_date
        resolve(employeeBirthDate.toDateString())
      }
    )
  })
}

export default { GetEmployeeBirthDate }
