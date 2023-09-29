// const dbConfig = require("../config/db.config.js");
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// });

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to database!');
// });

// module.exports = connection;




const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    operators: false, // Updated option
    logging: false, // Disable logging
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const initModels = require('./init-models')(sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.initModels = initModels;

// db.tutorials = require("./invoice_header.js")(sequelize, Sequelize);
// db.customers = require("./invoice_line_items.js")(sequelize, Sequelize);

module.exports = db;