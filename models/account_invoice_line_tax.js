/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceLineTax', {
		invoiceLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice_line',
				key: 'id'
			},
			unique: true,
			field: 'invoice_line_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
		}
	}, {
		tableName: 'account_invoice_line_tax',
		timestamps: false
	});
};
