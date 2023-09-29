const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const { logger, errorLogger } = require('./app/logs/loggers');

// Use Morgan middleware for logging HTTP requests
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

var corsOptions = {
    // origin: "http://localhost:3000"
    origin: ["http://localhost:3000", "http://localhost:3001"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to BW-Invoice web application." });
});

require("./app/routes/invoice.route")(app);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    errorLogger.error(`Error handler middleware: ${err.message}`);
    res.status(statusCode).json({ message: err.message });
    return;
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    logger.info(`Server is running on port ${PORT}.`);
});