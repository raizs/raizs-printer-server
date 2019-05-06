/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleOrderLineInvoiceRel', {
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
		orderLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_order_line',
				key: 'id'
			},
			field: 'order_line_id'
		}
	}, {
		tableName: 'sale_order_line_invoice_rel',
		timestamps: false
	});
};
