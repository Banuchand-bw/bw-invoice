const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_header', {
    invoice_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bill_to_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bill_to_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bill_to_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bill_to_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bill_to_zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bill_to_country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    invoice_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "invoice_number"
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    terms: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice_header',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "invoice_number",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invoice_number" },
        ]
      },
    ]
  });
};
