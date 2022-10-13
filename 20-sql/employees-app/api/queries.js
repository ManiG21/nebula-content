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
export const getAllEmployees = (req,res) => {
    pool.query(`SELECT * FROM employee`)
    .then((results, error) => {
        res.json(results.rows);
    });
}
export const getAllCities = (req, res) => {
    pool.query(`SELECT * FROM city`)
     .then((results, error) => {
        res.json(results.rows)
     }); 
}
export const getAllSalariedEmployees = (req, res) => {
    pool.query(`SELECT * FROM Salaried_Employee`)
     .then((results, error) => {
        res.json(results.rows)
     }); 
}
export const getAllHourlyEmployees = (req, res) => {
    pool.query(`SELECT * FROM Hourly_Employee`)
     .then((results, error) => {
        res.json(results.rows)
     }); 
}