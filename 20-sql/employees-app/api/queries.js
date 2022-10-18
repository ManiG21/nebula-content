import pg from 'pg'
export function getAllEmployees1(req, res) {
    res.json([{ id: 1, name: 'Fester' }]);
}
const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'employees'
});
const allowTables = ['hourly_employee', 'salaried_employee', 'city', 'employee']
export const getTable = (req, res) => {
    //  This is the same as the line below const tableName = req.params.tableName
    const { tableName } = req.params
    if (!allowTables.includes(tableName)) {
        return res.status(404).send('Error Table does not exist')
    }
    pool.query(`SELECT * FROM ${tableName}`)
        .then((results, error) => {
            res.json(results.rows);
        });
}
export const getTableById = (req, res) => {
    //  This is the same as the line below const tableName = req.params.tableName
    const { tableName, id } = req.params
    if (!allowTables.includes(tableName)) {
        return res.status(404).send('Error Table does not exist')
    }
    pool.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id])
        .then((results, error) => {
            res.json(results.rows);
        });
}
// How to add statically:
// export const getAllHourlyEmployees = (req, res) => {
//     pool.query(`SELECT * FROM Hourly_Employee`)
//      .then((results, error) => {
//         res.json(results.rows)
//      }); 
// }

export const deleteTable = (req,res) => {
    const {tableName, id} = req.params
    pool.query(`DELETE FROM ${tableName} WHERE id=${id} RETURNING *`, (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

export const addTable = (req, res) => {
    const { tableName } = req.params;
    // only allow specific tables
    if (!allowTables.includes(tableName)) {
        return res.status(404).send("Table not Found 🤔");
    }
    //    name of all columns for new data keys
    const keys = Object.keys(req.body).join(', ');
    // values of all data we're inserting into
    const values = Object.values(req.body);
    // dynamic data we're inserting into sql statemate($1,$2, etc)
    const psqlInsert = values.map((key, index) => `$${index + 1}`).join(', ')
    console.log(`INSERT INTO ${tableName} (${keys}) VALUES (${psqlInsert}) RETURNING *`)
    pool.query(`INSERT INTO ${tableName} (${keys}) VALUES (${psqlInsert}) RETURNING *`, values,
     (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    })
}
export const updateTable = (req, res) => {
    // UPDATE Statically Exs:
    // UPDATE city SET city = 'Boston' WHERE id = 1;
    // UPDATE employee SET employee_name = 'Fred', employee_number = '007' WHERE id = 1;
    const { tableName, id } = req.params;
    // only allow specific tables
    if (!allowTables.includes(tableName)) {
        return res.status(404).send("Table not Found 🤔");
    }
    //    name of all columns for new data keys
    const input = Object.keys(req.body).map((x, i) => `${x} = $${i + 1}`).join(', ');
    // values of all data we're inserting into
    const values = Object.values(req.body);
    console.log(`UPDATE ${tableName} SET ${input} WHERE id = ${id} RETURNING *`, values)
    pool.query(`UPDATE ${tableName} SET ${input} WHERE id = ${id} RETURNING *`, values,
     (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    })
}
