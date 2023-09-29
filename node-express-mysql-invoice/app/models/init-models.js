var DataTypes = require("sequelize").DataTypes;
var _invoice_header = require("./invoice_header");
var _invoice_line_items = require("./invoice_line_items");

function initModels(sequelize) {
  var invoice_header = _invoice_header(sequelize, DataTypes);
  var invoice_line_items = _invoice_line_items(sequelize, DataTypes);

  invoice_line_items.belongsTo(invoice_header, { as: "invoice", foreignKey: "invoice_id"});
  invoice_header.hasMany(invoice_line_items, { as: "invoice_line_items", foreignKey: "invoice_id"});

  return {
    invoice_header,
    invoice_line_items,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
