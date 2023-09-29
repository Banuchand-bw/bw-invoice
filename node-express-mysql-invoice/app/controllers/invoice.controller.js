const db = require("../models/db");
const initModels = db.initModels;
const { logger, errorLogger } = require('../logs/loggers');

// exports.findAll = (req, res) => {
//     db.query('SELECT * FROM Invoice_Header', (err, results, fields) => {
//         if (err) throw err;
//         console.log(results);
//         res.json(results);
//     });
// };

exports.findAll = async (req, res) => {
    try {
        const results = await initModels.invoice_header.findAll({
            include: [
                {
                    model: initModels.invoice_line_items, as: "invoice_line_items", required: true
                }
            ],
            // set 'raw' to true to return plain JSON object instead of Sequelize model instances
            raw: true
        });
        res.json(results);
    }
    catch (err) {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving Invoice.'
        });
        errorLogger.error(`Unable to connect to the database: ${err}`);
    }
};