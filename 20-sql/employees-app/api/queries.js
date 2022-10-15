import pg from 'pg'
export function getAllEmployees1(req, res){
    res.json([{id:1, name: 'Fester'}]);
}
const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'employees'
});
const allowTables = ['hourly_employee', 'salaried_employee', 'city', 'employee']
export const getTable = (req,res) => {
    //  This is the same as the line below const tableName = req.params.tableName
    const {tableName} = req.params
    if( !allowTables.includes(tableName)){
        return res.status(404).send('Error Table does not exist')
    }
    pool.query(`SELECT * FROM ${tableName}`)
    .then((results, error) => {
        res.json(results.rows);
    });
}
// export const getAllEmployees = (req,res) => {
//     pool.query(`SELECT * FROM employee`)
//     .then((results, error) => {
//         res.json(results.rows);
//     });
// }
// export const getAllCities = (req, res) => {
//     pool.query(`SELECT * FROM city`)
//      .then((results, error) => {
//         res.json(results.rows)
//      }); 
// }
// export const getAllSalariedEmployees = (req, res) => {
//     pool.query(`SELECT * FROM Salaried_Employee`)
//      .then((results, error) => {
//         res.json(results.rows)
//      }); 
// }
// export const getAllHourlyEmployees = (req, res) => {
//     pool.query(`SELECT * FROM Hourly_Employee`)
//      .then((results, error) => {
//         res.json(results.rows)
//      }); 
// }

// export const addEmployee = (req, res) => {
//     try {
//         const { employee_name, employee_number, date_hired ,city_id } = req.body;
//         pool.query(
//             `INSERT INTO employee (employee_name, employee_number, date_hired, city_id) VALUES ($1, $2, $3, $4) RETURNING *`,
//             [employee_name, employee_number, date_hired, city_id],
//             (error, results) => {
//                 if (error) {
//                     console.log(error, '<--- error here')
//                     throw error;
//                 }
//                 console.log(results, "<--- result!")
//                 res.status(200).json(results.rows)
//             }
//         );
//     } catch (e) {
//         console.log("ERROR CAUGHT! " + err.message)
//     }
//   };