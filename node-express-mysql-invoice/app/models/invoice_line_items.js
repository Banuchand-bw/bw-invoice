const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_line_items', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'invoice_header',
        key: 'invoice_id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    item_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice_line_items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "invoice_id",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
};
