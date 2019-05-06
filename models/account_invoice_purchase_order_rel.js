/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoicePurchaseOrderRel', {
		purchaseOrderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'purchase_order',
				key: 'id'
			},
			unique: true,
			field: 'purchase_order_id'
		},
		accountInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'account_invoice_id'
		}
	}, {
		tableName: 'account_invoice_purchase_order_rel',
		timestamps: false
	});
};
