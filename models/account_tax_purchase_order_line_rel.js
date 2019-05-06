/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxPurchaseOrderLineRel', {
		purchaseOrderLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'purchase_order_line',
				key: 'id'
			},
			unique: true,
			field: 'purchase_order_line_id'
		},
		accountTaxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'account_tax_id'
		}
	}, {
		tableName: 'account_tax_purchase_order_line_rel',
		timestamps: false
	});
};
